"use client";

import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faSmile,
  faRocket,
  faPrayingHands,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const Dedication = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-gray-900 text-white py-12 mb-8">
      <div className="container mx-auto px-4 py-8 rounded-lg shadow-lg">
        <h2
          className="text-3xl font-semibold text-center mb-6"
          data-aos="fade-up"
        >
          Dedication
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
          >
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faHeart}
                className="text-teal-400 mr-2 text-2xl"
              />
              <h3 className="text-xl font-semibold">To My Wife, Cris</h3>
            </div>
            <p>
              Your unwavering support and love are my greatest strengths. ❤️
            </p>
          </div>
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faSmile}
                className="text-teal-400 mr-2 text-2xl"
              />
              <h3 className="text-xl font-semibold">To My Daughter, Sofia</h3>
            </div>
            <p>
              Your smile brings light to my darkest days and fuels my drive to
              succeed. You are my sunshine. 🌞
            </p>
          </div>
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faRocket}
                className="text-teal-400 mr-2 text-2xl"
              />
              <h3 className="text-xl font-semibold">To My Son, Mateo</h3>
            </div>
            <p>
              Your boundless energy and curiosity inspire me to keep pushing
              forward. You are my rock. 💪
            </p>
          </div>
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faPrayingHands}
                className="text-teal-400 mr-2 text-2xl"
              />
              <h3 className="text-xl font-semibold">Thanks to God</h3>
            </div>
            <p>I thank God for His endless blessings and guidance. 🙏</p>
          </div>
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faSeedling}
                className="text-teal-400 mr-2 text-2xl"
              />
              <h3 className="text-xl font-semibold">To My Mother</h3>
            </div>
            <p>
              I am eternally grateful to my mother, whose wisdom and love have
              shaped me into the person I am today. 🌹
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dedication;
