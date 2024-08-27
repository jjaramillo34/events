"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import RestaurantCard from "../common/RestaurantCard";

const FeaturedRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch("/api/random");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched data:", data); // Log the data to verify structure

        // Access the restaurants array within the response object
        const restaurantsArray = data.restaurants;

        if (!Array.isArray(restaurantsArray)) {
          throw new Error("Data is not an array");
        }

        setRestaurants(restaurantsArray);
      } catch (error) {
        console.error("Failed to fetch restaurants:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  if (loading) {
    return (
      <div className="section bg-gray-100 w-full py-8">
        <div className="container mx-auto text-center my-8">
          <h2 className="text-4xl font-bold text-gray-800 my-4">
            Featured Restaurants
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(12)].map((_, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <Skeleton className="h-48 w-full mb-4" />
                  <Skeleton className="h-4 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <Card className="w-full max-w-md mx-auto mt-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
          <p className="text-gray-700">{error}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="section bg-gray-100 w-full py-8" id="featured-restaurants">
      <div className="container mx-auto text-center my-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-800 my-4"
        >
          Featured Restaurants
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {restaurants.slice(0, 12).map((restaurant, index) => (
            <motion.div key={restaurant.slug} variants={itemVariants}>
              <RestaurantCard restaurant={restaurant} index={index} />
            </motion.div>
          ))}
        </motion.div>
        <br />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-4"
        >
          <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-700">
            <Link href="/restaurants/1">View All Restaurants</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedRestaurants;
