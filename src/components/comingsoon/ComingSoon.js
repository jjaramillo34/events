"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ComingSoon = ({
  title = "Coming Soon",
  description = "We're working hard to bring you something amazing. Stay tuned!",
  notifyText = "Notify Me",
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000 });
    setIsClient(true); // This ensures we are on the client side
  }, []);

  const handleBackHome = () => {
    if (isClient) {
      window.location.href = "/";
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 p-8">
      <div
        className="text-center p-8 bg-white shadow-lg rounded-lg"
        data-aos="fade-up"
      >
        <h1 className="text-6xl font-bold text-gray-800 mb-6">{title}</h1>
        <p className="text-xl text-gray-600 mb-6">{description}</p>
        <div className="space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
            {notifyText}
          </button>
          <button
            onClick={handleBackHome}
            className="px-4 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-600"
          >
            Go Back Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
