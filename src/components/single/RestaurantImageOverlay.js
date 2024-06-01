import React from "react";
import Image from "next/image";

const RestaurantImageOverlay = ({ restaurant }) => {
  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg mb-8"
      style={{ height: "600px" }}
    >
      <Image
        src={`/img/res/${restaurant.slug}.jpg`}
        alt={restaurant.name}
        width={1600}
        height={600}
        objectFit="cover"
        sizes="100vw"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent text-white p-6">
        <h1 className="text-5xl font-bold">{restaurant.name}</h1>
        <p className="text-xl">
          {restaurant.subtypes} - {restaurant.category}
        </p>
      </div>
    </div>
  );
};

export default RestaurantImageOverlay;
