"use client";

import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;

const handleRoute = (type) => {
  const apiUrl = `https://api.mapbox.com/directions/v5/mapbox/${type}/-122.42,37.78;-77.03,38.91?access_token=${mapboxgl.accessToken}`;
};

const mapStyle = {
  width: "100%",
  height: "600px",
};

const LocationMap = ({ restaurant }) => {
  useEffect(() => {
    if (!restaurant || !restaurant.latitude || !restaurant.longitude) return;

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/light-v10",
      center: [restaurant.longitude, restaurant.latitude],
      zoom: 18,
      pitch: 45,
    });

    const el = document.createElement("div");
    el.className = "marker";
    el.style.backgroundImage = 'url("/img/pin.png")';
    el.style.width = "40px";
    el.style.height = "40px";
    el.style.backgroundSize = "cover";

    new mapboxgl.Marker(el)
      .setLngLat([restaurant.longitude, restaurant.latitude])
      .addTo(map);

    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
      })
    );

    map.addControl(new mapboxgl.NavigationControl());

    const getCurrentLocation = () => {
      if (!navigator.geolocation) {
        console.error("Geolocation is not supported by your browser");
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = {
            lng: position.coords.longitude,
            lat: position.coords.latitude,
          };

          new mapboxgl.Marker().setLngLat([coords.lng, coords.lat]).addTo(map);

          getRoute(coords);
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    };

    const addOrUpdateRoute = (coords) => {
      const sourceId = "route";
      const layerId = "route-line";

      if (map.getSource(sourceId)) {
        map.getSource(sourceId).setData({
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: coords,
          },
        });
      } else {
        map.addLayer({
          id: layerId,
          type: "line",
          source: {
            type: "geojson",
            data: {
              type: "Feature",
              properties: {},
              geometry: {
                type: "LineString",
                coordinates: coords,
              },
            },
          },
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "#3887be",
            "line-width": 5,
            "line-opacity": 0.75,
          },
        });
      }
    };

    const getRoute = (coords) => {
      const coordsString = `${coords.lng},${coords.lat};${restaurant.longitude},${restaurant.latitude}`;
      const apiUrl = `https://api.mapbox.com/directions/v5/mapbox/driving/${coordsString}?geometries=geojson&access_token=${mapboxgl.accessToken}`;

      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          if (data.routes && data.routes.length > 0) {
            const route = data.routes[0].geometry.coordinates;
            addOrUpdateRoute(route);
          } else {
            console.error("No routes found in response:", data);
          }
        })
        .catch((error) => {
          console.error("Error fetching route:", error);
        });
    };

    map.on("load", getCurrentLocation);

    map.on("mouseenter", "route-line", function () {
      map.getCanvas().style.cursor = "pointer";
    });

    const handleRoute = (type) => {
      getCurrentLocation();
    };

    return () => map.remove();
  }, [restaurant]);

  return (
    <div className="bg-gray-200 p-10 rounded-lg mt-8">
      <h5 className="text-xl font-bold">Location</h5>
      <div className="flex justify-center space-x-4 mt-4">
        <button
          className="bg-blue-500 text-white hover:bg-blue-600 font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out shadow hover:shadow-md"
          onClick={() => handleRoute("driving")}
        >
          Get Directions (Driving)
        </button>

        <button
          className="bg-green-500 text-white hover:bg-green-600 font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out shadow hover:shadow-md"
          onClick={() => handleRoute("traffic")}
        >
          Get Directions (Traffic)
        </button>
        {/* add space here */}
        <span className="text-gray-600"></span>
      </div>
      <div id="map" className="h-96 w-full" style={mapStyle}></div>
    </div>
  );
};

export default LocationMap;
