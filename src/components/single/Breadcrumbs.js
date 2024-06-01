import React from "react";
import Link from "next/link";

const Breadcrumbs = ({ restaurant }) => {
  return (
    <div className="bg-white p-4 shadow-sm rounded-lg mb-8">
      <nav
        className="text-gray-700 text-sm font-medium"
        aria-label="Breadcrumb"
      >
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <Link
              href="/"
              passHref
              className="bg-teal-500 hover:bg-black text-white rounded-full px-4 py-2 transition-colors duration-300"
            >
              Home
            </Link>
            <span className="mx-2 text-gray-500">/</span>
          </li>
          <li className="flex items-center">
            <Link
              href="/restaurants"
              passHref
              className="bg-teal-500 hover:bg-black text-white rounded-full px-4 py-2 transition-colors duration-300"
            >
              Restaurants
            </Link>
            <span className="mx-2 text-gray-500">/</span>
          </li>
          <li
            className="bg-black text-white rounded-full px-4 py-2 bg-opacity-50"
            aria-current="page"
          >
            {restaurant.name}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
