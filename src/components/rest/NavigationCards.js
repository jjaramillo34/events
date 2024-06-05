import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCity,
  faMapMarkedAlt,
  faMapPin,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

const NavigationCards = () => {
  const navigationItems = [
    { title: "Borough", icon: faCity, link: "/borough" },
    { title: "Neighborhoods", icon: faMapMarkedAlt, link: "/neighborhoods" },
    { title: "Zip Code", icon: faMapPin, link: "/zipcode" },
    { title: "Type", icon: faUtensils, link: "/type" },
  ];

  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800" data-aos="fade-up">
          Explore by Category
        </h2>
        <p
          className="text-gray-600 mt-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Find restaurants based on different categories. Click on any category
          to explore more.
        </p>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {navigationItems.map((item) => (
          <Link
            key={item.title}
            href={item.link}
            passHref
            className="block bg-white shadow-lg rounded-lg p-6 text-center transform transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <FontAwesomeIcon
              icon={item.icon}
              className="text-4xl text-teal-500 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {item.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavigationCards;
