"use client";

import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Car, AlertTriangle } from "lucide-react";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;

const LocationMap = ({ restaurant }) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!restaurant || !restaurant.latitude || !restaurant.longitude) return;

    const newMap = new mapboxgl.Map({
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
      .addTo(newMap);

    newMap.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
      })
    );

    newMap.addControl(new mapboxgl.NavigationControl());

    newMap.on("load", () => getCurrentLocation(newMap));

    setMap(newMap);

    return () => newMap.remove();
  }, [restaurant]);

  const getCurrentLocation = (mapInstance) => {
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

        new mapboxgl.Marker()
          .setLngLat([coords.lng, coords.lat])
          .addTo(mapInstance);

        getRoute(coords, mapInstance);
      },
      (error) => {
        console.error("Error getting location:", error.message);
      }
    );
  };

  const addOrUpdateRoute = (coords, mapInstance) => {
    const sourceId = "route";
    const layerId = "route-line";

    if (mapInstance.getSource(sourceId)) {
      mapInstance.getSource(sourceId).setData({
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: coords,
        },
      });
    } else {
      mapInstance.addLayer({
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

  const getRoute = (coords, mapInstance) => {
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
          addOrUpdateRoute(route, mapInstance);
        } else {
          console.error("No routes found in response:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching route:", error);
      });
  };

  const handleRoute = (type) => {
    if (map) {
      getCurrentLocation(map);
    }
  };

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="flex items-center">
          <MapPin className="mr-2" />
          Location
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center space-x-4 mb-4">
          <Button
            onClick={() => handleRoute("driving")}
            className="flex items-center"
          >
            <Car className="mr-2" />
            Driving Directions
          </Button>
          <Button
            onClick={() => handleRoute("traffic")}
            variant="secondary"
            className="flex items-center"
          >
            <AlertTriangle className="mr-2" />
            Traffic Directions
          </Button>
        </div>
        <div
          id="map"
          className="h-[600px] w-full rounded-md overflow-hidden"
        ></div>
      </CardContent>
    </Card>
  );
};

export default LocationMap;
