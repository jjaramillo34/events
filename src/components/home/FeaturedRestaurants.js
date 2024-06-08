"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import RestaurantCard from "../common/RestaurantCard";

const FeaturedRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const fetchRestaurants = async () => {
      try {
        const response = await fetch("/api/random");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error("Data is not an array");
        }
        setRestaurants(data);
      } catch (error) {
        console.error("Failed to fetch restaurants:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="section bg-gray-100 w-full py-8" id="featured-restaurants">
      <div className="container mx-auto text-center my-8">
        <h2
          className="text-4xl font-bold text-gray-800 my-4"
          data-aos="fade-up"
        >
          Featured Restaurants
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {restaurants.slice(0, 12).map((restaurant, index) => (
            <RestaurantCard key={restaurant.slug} restaurant={restaurant} index={index}/>
          ))}
        </div>
        <br />
        <div className="mt-4" data-aos="fade-up">
          <Link
            href="/restaurants/1"
            className="bg-teal-500 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 mt-2"
          >
            View All Restaurants
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRestaurants;
