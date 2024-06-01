import React from "react";
import Image from "next/image";

const RestaurantLogoAndPrice = ({ restaurant }) => {
  return (
    <div className="bg-teal-100 p-8 rounded-lg shadow-lg mb-8 flex flex-col items-center justify-center">
      {restaurant.logo ? (
        <Image
          src={restaurant.logo}
          alt={restaurant.name}
          width={128}
          height={128}
          className="rounded-full border-4 border-teal-300 shadow-sm"
        />
      ) : (
        <Image
          src="/img/restaurant.png"
          alt={restaurant.name}
          width={128}
          height={128}
          className="rounded-full border-4 border-teal-300 shadow-sm"
        />
      )}
      <h2 className="text-3xl font-bold text-teal-900 mt-4">Price Range</h2>
      <p className="text-2xl text-teal-800 font-semibold mt-2">
        {restaurant.range || "$$$"}
      </p>
    </div>
  );
};

export default RestaurantLogoAndPrice;
