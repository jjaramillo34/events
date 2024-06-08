// components/RestaurantCard.js
import React from "react";
import Image from "next/image";
import Link from "next/link";

const RestaurantCard = ({ restaurant, index }) => {
  return (
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
            <strong>Address:</strong> {restaurant.full_address.split(",")[0]}
          </p>
          {restaurant.rating && (
            <div className="text-sm text-gray-600">
              <strong>Rating:</strong>
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={
                    i < restaurant.rating ? "text-yellow-500" : "text-gray-300"
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
  );
};

export default RestaurantCard;
