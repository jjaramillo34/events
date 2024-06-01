"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

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
            <div
              key={restaurant.slug}
              className="col-span-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="max-w-sm mx-auto rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition duration-500">
                {restaurant.photo ? (
                  <Image
                    src={`/img/res/${restaurant.slug}.jpg`}
                    className="w-full object-cover h-48"
                    alt={restaurant.name}
                    width={400}
                    height={300}
                  />
                ) : (
                  <Image
                    src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=740"
                    className="w-full object-cover h-48"
                    alt="Placeholder Image"
                    width={400}
                    height={300}
                  />
                )}
                <div className="px-6 py-4">
                  <h5 className="text-2xl font-semibold mb-3 truncate overflow-hidden whitespace-nowrap">
                    {restaurant.name}
                  </h5>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Phone:</strong> {restaurant.phone}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Address:</strong>{" "}
                    {restaurant.full_address.split(",")[0]}
                  </p>
                  {restaurant.rating && (
                    <div className="text-sm text-gray-600">
                      <strong>Rating:</strong>
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={
                            i < restaurant.rating
                              ? "text-yellow-500"
                              : "text-gray-300"
                          }
                        >
                          &#9733;
                        </span>
                      ))}
                    </div>
                  )}
                  <Link
                    href={`/restaurant/${restaurant.slug}`}
                    className="block bg-teal-500 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 mt-2"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <br />
        <div className="mt-4" data-aos="fade-up">
          <Link
            href="/restaurants"
            className="bg-blue-600 border border-blue-600 text-white hover:bg-blue-700 py-2 px-4 rounded-full transition duration-300"
          >
            View All Restaurants
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRestaurants;
