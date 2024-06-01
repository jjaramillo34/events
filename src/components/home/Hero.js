"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  const text = [
    "Restaurants Directory",
    "Events Directory",
    "RoofTops Directory",
    "Spots Directory",
  ];

  return (
    <div className="section bg-hero-pattern bg-cover bg-center bg-fixed p-5 mb-5 animate__animated animate__fadeIn w-full flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h2
          className="text-white text-4xl font-bold drop-shadow-md"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <TypeAnimation
            sequence={["Discover the best ", ...text, " in NYC"]}
            wrapper="span"
            speed={20}
            style={{ fontSize: "1em", display: "inline-block" }}
            repeat={Infinity}
          />
        </h2>
        <h1
          className="mb-3 text-white text-7xl font-bold drop-shadow-md"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Welcome to the Restaurants Directory
        </h1>
        <h4
          className="mb-3 text-white text-2xl drop-shadow"
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          Discover your next great dining experience.
        </h4>
        <p
          className="text-lg text-white mb-4 drop-shadow"
          data-aos="fade-left"
          data-aos-delay="1000"
          data-aos-duration="1000"
        >
          Explore the best private event spaces NYC has to offer, from private
          dining rooms to breathtaking rooftop venues.
        </p>
        <a
          href="/restaurants"
          className="bg-teal-600 text-white hover:bg-black hover:text-white font-bold py-2 px-8 rounded-full uppercase text-lg"
          data-aos="zoom-in"
          data-aos-delay="1500"
          style={{ transition: "all 0.3s" }}
        >
          Explore Now
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
