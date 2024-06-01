import React from "react";
import Link from "next/link";

const UserActionButtons = () => {
  return (
    <div className="flex justify-center space-x-4 mt-8 p-4 mx-auto max-w-4xl">
      {/* Back to Restaurants Button */}
      <Link
        href="/restaurants"
        className="bg-gray-300 text-gray-800 hover:bg-gray-400 hover:text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out shadow hover:shadow-md"
      >
        Back to Restaurants
      </Link>

      {/* Contact Us Button */}
      <Link
        href="/contact"
        className="bg-blue-500 text-white hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out shadow hover:shadow-md"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default UserActionButtons;
