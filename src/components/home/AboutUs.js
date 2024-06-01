"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
import "aos/dist/aos.css"; // Import CSS for AOS

const AboutUsSection = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div
      className="section bg-gray-800 bg-opacity-90 w-full py-8 text-white"
      id="about-us"
    >
      <div className="container mx-auto text-center">
        <h2
          className="text-4xl font-bold my-4 uppercase"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          About Us
        </h2>
        <div
          className="flex justify-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="w-full lg:w-1/2">
            <Image
              src="/img/about.jpg"
              alt="Dining experiences crafted by our team"
              className="rounded mb-3 w-full shadow-lg"
              width={800}
              height={500}
            />
          </div>
        </div>
        <p className="text-lg my-4" data-aos="fade-up" data-aos-delay="600">
          Dedicated to uncovering the most unique dining experiences for your
          events, our team believes in the magic of a perfectly matched venue.
          Join us on a journey to discover spaces that turn any gathering into
          an unforgettable affair.
        </p>
        <div
          className="mt-4 inline-block"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          <a
            href="/about"
            className="bg-transparent border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white py-2 px-4 rounded-full transition-colors duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
