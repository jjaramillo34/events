"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import mapboxgl from "mapbox-gl";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "mapbox-gl/dist/mapbox-gl.css";
import RestaurantCard from "../common/RestaurantCard";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;

const RestaurantsSection = ({ neighborhood }) => {
  const [isListViewVisible, setIsListViewVisible] = useState(true);
  const mapRef = useRef(null);

  const showListView = () => {
    setIsListViewVisible(true);
  };

  const showMapView = () => {
    setIsListViewVisible(false);
  };

  useEffect(() => {
    if (!neighborhood || !neighborhood.restaurants) return;

    const restaurant = neighborhood.restaurants[0];
    const lat = restaurant.latitude;
    const lon = restaurant.longitude;

    mapRef.current = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/light-v10",
      center: [lon, lat],
      zoom: 14,
      pitch: 45,
    });

    neighborhood.restaurants.forEach((restaurant) => {
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
  }, [neighborhood]);

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
            Restaurants in {neighborhood.name} (
            {neighborhood.restaurants.length})
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
              } grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5`}
            >
              {neighborhood.restaurants.map((restaurant, index) => (
                <RestaurantCard
                  key={restaurant.slug}
                  restaurant={restaurant}
                  index={index}
                />
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
