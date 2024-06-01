import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

const ServicesAndAmenities = ({ restaurant }) => {
  const about = JSON.parse(restaurant.about);

  return (
    <div className="mx-auto max-w-4xl bg-gray-200 p-8 rounded-lg shadow max-w-10xl">
      <h3 className="text-3xl font-semibold text-center">
        Services and Amenities
      </h3>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.keys(about).map((category) => (
          <div
            key={category}
            className="bg-white p-4 rounded-lg shadow transition-opacity duration-300 ease-in-out hover:opacity-100 opacity-90"
          >
            <h4 className="font-bold text-xl text-magenta-800">
              {category.replace(/_/g, " ")}:
            </h4>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              {Object.keys(about[category]).map((detail) => (
                <li
                  key={detail}
                  className={about[category][detail] ? "" : "text-gray-500"}
                >
                  {detail.replace(/_/g, " ")}
                  <FontAwesomeIcon
                    icon={about[category][detail] ? faCheck : faTimes}
                    className={
                      about[category][detail]
                        ? "text-green-500 ml-2"
                        : "text-red-500 ml-2"
                    }
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesAndAmenities;
