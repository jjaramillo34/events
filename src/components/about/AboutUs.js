"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-gray-100 mb-12 text-gray-800 py-12">
      <div className="container mx-auto px-4">
        <h1
          className="text-4xl font-semibold text-center uppercase mb-6"
          data-aos="fade-up"
        >
          About Us
        </h1>

        <div className="flex justify-center mb-10">
          <div
            id="gif-container"
            className="relative w-full max-w-4xl mx-auto"
            data-aos="zoom-in"
          >
            <Image
              src="/img/animation.gif"
              alt="Animation Placeholder"
              className="block mx-auto rounded-lg shadow-lg"
              width="400"
              height="400"
            />
          </div>
        </div>

        <div className="text-lg mb-10">
          <p className="text-center mb-4" data-aos="fade-right">
            We are a team of passionate foodies dedicated to uncovering the
            finest restaurants, events, rooftops, and hidden spots in NYC.
          </p>
          <p className="text-center mb-4" data-aos="fade-left">
            Our mission is to guide you to the best dining experiences and
            exciting spots that this vibrant city has to offer.
          </p>
          <p className="text-center mb-4" data-aos="fade-right">
            Whether you&apos;re searching for a cozy café, an exquisite rooftop
            restaurant, or an exclusive event, we have you covered.
          </p>
          <p className="text-center" data-aos="fade-left">
            If you have any questions or suggestions, feel free to
            <a href="/contact" className="text-teal-500 hover:underline ml-1">
              contact us
            </a>
            .
          </p>
        </div>

        <div className="text-center" data-aos="zoom-in">
          <a
            href="/contact"
            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 ease-in-out shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
