import React from "react";
import Image from "next/image";

const RestaurantImageOverlay = ({ restaurant }) => {
  return (
    <section className="relative overflow-hidden rounded-lg shadow-lg mb-8 h-96 md:h-[600px] w-full">
      <Image
        src={`/img/res/${restaurant.slug}.jpg`}
        alt={restaurant.name}
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent text-white flex flex-col justify-end p-6 md:p-12">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-2 md:mb-4 drop-shadow-lg">
          {restaurant.name}
        </h1>
        <p className="text-lg md:text-2xl font-semibold drop-shadow-md">
          {restaurant.type} - {restaurant.category}
        </p>
      </div>
    </section>
  );
};

export default RestaurantImageOverlay;
