"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import mapboxgl from "mapbox-gl";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;

const RestaurantsSection = ({ borough }) => {
  const [isListViewVisible, setIsListViewVisible] = useState(true);
  const mapRef = useRef(null);

  const showListView = () => {
    setIsListViewVisible(true);
  };

  const showMapView = () => {
    setIsListViewVisible(false);
  };

  useEffect(() => {
    if (!borough || !borough.restaurants) return;

    const restaurant = borough.restaurants[0];
    const lat = restaurant.latitude;
    const lon = restaurant.longitude;

    mapRef.current = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/light-v10",
      center: [lon, lat],
      zoom: 14,
      pitch: 45,
    });

    borough.restaurants.forEach((restaurant) => {
      const el = document.createElement("div");
      el.className = "marker";
      el.style.backgroundImage = 'url("/img/pin.png")';
      el.style.width = "40px";
      el.style.height = "40px";
      el.style.backgroundSize = "cover";

      new mapboxgl.Marker(el)
        .setLngLat([restaurant.longitude, restaurant.latitude])
        .addTo(mapRef.current);
    });

    mapRef.current.addControl(new mapboxgl.NavigationControl());

    return () => mapRef.current.remove();
  }, [borough]);

  useEffect(() => {
    if (!isListViewVisible && mapRef.current) {
      mapRef.current.resize();
    }
  }, [isListViewVisible]);

  return (
    <div className="px-12 py-10 bg-white shadow-2xl my-6">
      <div className="bg-gray-300 py-10">
        <div className="container px-6 py-11 max-w-16xl">
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">
            Restaurants in {borough.name} | ({borough.restaurants.length})
          </h2>
          <div className="flex justify-center mb-6">
            <button
              id="listViewButton"
              className={`text-lg font-bold py-2 px-4 rounded-l ${
                isListViewVisible ? "bg-blue-500" : "bg-blue-700"
              } text-white`}
              onClick={showListView}
            >
              List View
            </button>
            <button
              id="mapViewButton"
              className={`text-lg font-bold py-2 px-4 rounded-r ${
                isListViewVisible ? "bg-green-700" : "bg-green-500"
              } text-white`}
              onClick={showMapView}
            >
              Map View
            </button>
          </div>
          <div className="grid grid-cols-1" id="contentArea">
            <div
              id="restaurantList"
              className={`${
                isListViewVisible ? "grid" : "hidden"
              } grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5`}
            >
              {borough.restaurants.map((restaurant) => (
                <a
                  key={restaurant.slug}
                  href={`/restaurant/${restaurant.slug}`}
                  className="hover:shadow-2xl transition duration-500"
                >
                  <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                    <Image
                      src={`/img/res/${restaurant.slug}.jpg`}
                      className="w-full h-48 object-cover rounded-t-xl"
                      alt={restaurant.name}
                      width={400}
                      height={300}
                    />

                    <div className="p-6">
                      <h5 className="text-xl font-semibold mb-3 truncate">
                        {restaurant.name}
                      </h5>
                      <p className="text-sm text-gray-700 mb-1">
                        <strong>Phone:</strong> {restaurant.phone}
                      </p>
                      <p className="text-sm text-gray-700 mb-4">
                        <strong>Address:</strong> {restaurant.street}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div
              id="mapContainer"
              className={`${isListViewVisible ? "hidden" : "block"}`}
            >
              <div className="bg-white shadow-xl rounded-xl p-4">
                <div
                  id="map"
                  className="h-96"
                  style={{ width: "100%", height: 600 }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantsSection;
