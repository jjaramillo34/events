"use client";

import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faBuilding,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS for animations

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 max-w-10xl bg-white bg-opacity-50">
      <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
          data-aos="fade-up"
        >
          <FontAwesomeIcon
            icon={faCalendarAlt}
            className="text-6xl text-teal-500 mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2">Events</h3>
          <p className="text-gray-600 text-center">
            Discover the best venues for hosting your events. From corporate
            gatherings to private parties, we have got you covered.
          </p>
          <button
            className="bg-teal-500 text-white px-4 py-2 mt-4 rounded-full"
            href="/events"
          >
            Learn More
          </button>
        </div>
        <div
          className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <FontAwesomeIcon
            icon={faBuilding}
            className="text-6xl text-teal-500 mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2">Rooftops</h3>
          <p className="text-gray-600 text-center">
            Enjoy stunning views and great ambiance at our curated list of
            rooftop spots. Perfect for a night out or a relaxing evening.
          </p>
          <button
            className="bg-teal-500 text-white px-4 py-2 mt-4 rounded-full"
            href="/rooftops"
          >
            Learn More
          </button>
        </div>
        <div
          className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="text-6xl text-teal-500 mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2">Spots</h3>
          <p className="text-gray-600 text-center">
            Find the hottest spots in town. Whether you&apos;re looking for a
            cozy cafe or a vibrant nightclub, we have recommendations for you.
          </p>
          <button className="bg-teal-500 text-white px-4 py-2 mt-4 rounded-full">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
