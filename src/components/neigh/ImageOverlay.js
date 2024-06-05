"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const NeighborhoodDetail = ({ neighborhood }) => {
  return (
    <div className="relative group mb-8">
      <Image
        src={neighborhood.photos[0].image}
        alt={neighborhood.name}
        width={1920}
        height={1080}
        priority={true}
        className="w-full h-64 object-cover rounded-3xl shadow-2xl transition-all duration-300 group-hover:opacity-75"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-7xl font-bold text-teal-700 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase">
          {neighborhood.name}
        </h1>
      </div>
    </div>
  );
};

export default NeighborhoodDetail;
