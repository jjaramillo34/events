"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import RestaurantCard from "../common/RestaurantCard";
import Pagination from "../common/Pagination";

const RestaurantsList = ({ restaurants, page, totalPages }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard
            key={restaurant.slug}
            restaurant={restaurant}
            index={index}
          />
        ))}
      </div>
      <br />
      <div className="mt-4" data-aos="fade-up">
        <Pagination page={page} totalPages={totalPages} />
      </div>
    </div>
  );
};

export default RestaurantsList;
