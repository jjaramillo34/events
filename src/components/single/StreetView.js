import React from "react";
import Image from "next/image";

const StreetView = ({ restaurant }) => {
  return (
    <div className="mx-auto max-w-4xl bg-white p-8 rounded-lg shadow-lg mt-8">
      <h2 className="text-4xl font-bold text-center mb-6">Street View</h2>
      <div className="flex justify-center">
        <Image
          src={restaurant.street_view}
          alt={`Street View of ${restaurant.name}`}
          className="rounded-lg shadow-lg"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default StreetView;
