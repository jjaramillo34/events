"use client";

import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faSearch,
  faUser,
  faBolt,
  faFilter,
  faDatabase,
  faComments,
  faMagic,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const DevelopmentUpdates = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 py-8 rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <FontAwesomeIcon
            icon={faCode}
            className="text-5xl text-teal-400 mb-4"
          />
          <h2 className="text-3xl font-semibold" data-aos="fade-up">
            Development Updates
          </h2>
        </div>
        <p className="text-lg text-center mb-6" data-aos="fade-up">
          Stay updated with our latest development news and improvements.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="bg-gray-700 p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
          >
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faSearch}
                className="text-teal-400 mr-2 text-xl"
              />
              <h3 className="text-xl font-semibold">
                New Search Functionality
              </h3>
            </div>
            <p>
              Added new search functionality for faster restaurant discovery.
            </p>
          </div>
          <div
            className="bg-gray-700 p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faUser}
                className="text-teal-400 mr-2 text-xl"
              />
              <h3 className="text-xl font-semibold">Improved User Interface</h3>
            </div>
            <p>Improved user interface for a better browsing experience.</p>
          </div>
          <div
            className="bg-gray-700 p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faBolt}
                className="text-teal-400 mr-2 text-xl"
              />
              <h3 className="text-xl font-semibold">Enhanced Performance</h3>
            </div>
            <p>Enhanced performance and stability of the platform.</p>
          </div>
          <div
            className="bg-gray-700 p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faMagic}
                className="text-teal-400 mr-2 text-xl"
              />
              <h3 className="text-xl font-semibold">Autocomplete Feature</h3>
            </div>
            <p>
              Implemented autocomplete feature for search inputs to enhance user
              experience.
            </p>
          </div>
          <div
            className="bg-gray-700 p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faFilter}
                className="text-teal-400 mr-2 text-xl"
              />
              <h3 className="text-xl font-semibold">Advanced Filters</h3>
            </div>
            <p>Added advanced filtering options to refine search results.</p>
          </div>
          <div
            className="bg-gray-700 p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faDatabase}
                className="text-teal-400 mr-2 text-xl"
              />
              <h3 className="text-xl font-semibold">Enhanced API</h3>
            </div>
            <p>
              Improved API performance and added new endpoints for better
              integration.
            </p>
          </div>
          <div
            className="bg-gray-700 p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faComments}
                className="text-teal-400 mr-2 text-xl"
              />
              <h3 className="text-xl font-semibold">Comments and Feedback</h3>
            </div>
            <p>
              Introduced a comments section for user feedback and interaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentUpdates;
