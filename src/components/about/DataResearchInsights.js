"use client";

import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faUtensils,
  faDollarSign,
  faMapMarkerAlt,
  faPercentage,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const DataResearchInsights = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-white text-gray-800 py-12 mb-8">
      <div className="container mx-auto px-4 py-8 rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <FontAwesomeIcon
            icon={faChartLine}
            className="text-5xl text-teal-400 mb-4"
          />
          <h2 className="text-3xl font-semibold" data-aos="fade-up">
            Data Research Insights
          </h2>
        </div>
        <p className="text-lg text-center mb-6" data-aos="fade-up">
          Discover the latest trends and insights from our data research team.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="bg-gray-100 p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
          >
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faUtensils}
                className="text-teal-400 mr-2 text-xl"
              />
              <h3 className="text-xl font-semibold">Top 10 Restaurants</h3>
            </div>
            <p>
              Explore the top 10 most popular restaurants in NYC, offering a
              variety of cuisines and dining experiences.
            </p>
          </div>
          <div
            className="bg-gray-100 p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faDollarSign}
                className="text-teal-400 mr-2 text-xl"
              />
              <h3 className="text-xl font-semibold">Cost Analysis</h3>
            </div>
            <p>
              Get insights into the average cost of dining out in Manhattan and
              plan your budget accordingly.
            </p>
          </div>
          <div
            className="bg-gray-100 p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-teal-400 mr-2 text-xl"
              />
              <h3 className="text-xl font-semibold">Foodie Neighborhoods</h3>
            </div>
            <p>
              Discover the best neighborhoods for foodies in Brooklyn, known for
              their diverse and vibrant food scenes.
            </p>
          </div>
          <div
            className="bg-gray-100 p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faPercentage}
                className="text-teal-400 mr-2 text-xl"
              />
              <h3 className="text-xl font-semibold">Discount Offers</h3>
            </div>
            <p>
              Find the latest discount offers and deals at popular restaurants
              and save on your dining experiences.
            </p>
          </div>
          <div
            className="bg-gray-100 p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="text-teal-400 mr-2 text-xl"
              />
              <h3 className="text-xl font-semibold">Upcoming Events</h3>
            </div>
            <p>
              Stay informed about upcoming food festivals, restaurant openings,
              and special events in NYC.
            </p>
          </div>
          <div
            className="bg-gray-100 p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faUtensils}
                className="text-teal-400 mr-2 text-xl"
              />
              <h3 className="text-xl font-semibold">Cuisine Highlights</h3>
            </div>
            <p>
              Learn about the latest cuisine trends and discover new dining
              experiences and hidden gems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataResearchInsights;
