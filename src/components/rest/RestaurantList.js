"use client";

import React from "react";
import { motion } from "framer-motion";
import RestaurantCard from "../common/RestaurantCard";
import Pagination from "../common/Pagination";

const RestaurantsList = ({ restaurants, page, totalPages }) => {
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

  return (
    <section className="py-12">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {restaurants.map((restaurant, index) => (
          <motion.div key={restaurant.slug} variants={itemVariants}>
            <RestaurantCard restaurant={restaurant} index={index} />
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Pagination page={page} totalPages={totalPages} />
      </motion.div>
    </section>
  );
};

export default RestaurantsList;
