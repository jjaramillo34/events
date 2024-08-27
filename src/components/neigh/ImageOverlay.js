"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const NeighborhoodDetail = ({ neighborhood }) => {
  return (
    <Card className="relative overflow-hidden rounded-3xl shadow-2xl mb-8">
      <CardContent className="p-0">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="relative aspect-[16/9]"
        >
          <Image
            src={neighborhood.photos[0].image}
            alt={neighborhood.name}
            layout="fill"
            objectFit="cover"
            priority={true}
            className="transition-all duration-300"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center uppercase">
              {neighborhood.name}
            </h1>
          </motion.div>
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default NeighborhoodDetail;
