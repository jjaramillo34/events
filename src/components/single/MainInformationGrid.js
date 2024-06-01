import React from "react";
import { formatPhones } from "../../../helpers/utils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faTags,
  faLayerGroup,
  faInfoCircle,
  faMapMarkerAlt,
  faBuilding,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

const MainInformationGrid = ({ restaurant }) => {
  const emails = [
    restaurant.email_1,
    restaurant.email_2,
    restaurant.email_3,
  ].filter(Boolean);
  let mailtoLink = "mailto:";
  let subject = `Inquiry about ${restaurant.name}`;
  if (emails.length > 0) {
    mailtoLink += emails[0]; // First email goes to 'To'
    subject = encodeURIComponent(subject);
    if (emails.length > 1) {
      mailtoLink += "?cc=" + emails.slice(1).join(",");
      mailtoLink += "&subject=" + subject;
    } else {
      mailtoLink += "?subject=" + subject;
    }
  }

  return (
    <div className="bg-teal-100 p-8 rounded-lg shadow-lg mx-auto max-w-10xl mb-8 bg-opacity-90">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* General Information */}
        <div className="space-y-4">
          <h3 className="text-3xl font-semibold text-gray-800">
            General Information
          </h3>
          <p>
            <FontAwesomeIcon icon={faUtensils} className="mr-2 text-teal-500" />
            {restaurant.name || "Zuma New York"}
          </p>
          <p>
            <FontAwesomeIcon icon={faTags} className="mr-2 text-teal-500" />
            {restaurant.type || "Japanese Restaurant"}
          </p>
          <p>
            <FontAwesomeIcon
              icon={faLayerGroup}
              className="mr-2 text-teal-500"
            />
            {restaurant.category || "Restaurants"}
          </p>
          <p>
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="mr-2 text-teal-500"
            />
            {restaurant.description || "A stylish, modern Japanese restaurant."}
          </p>
          <p>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="mr-2 text-teal-500"
            />
            {restaurant.full_address || "261 Madison Ave, New York, NY 10016"}
          </p>
          <p>
            <FontAwesomeIcon icon={faBuilding} className="mr-2 text-teal-500" />
            {restaurant.located_in || "Manhattan"}
          </p>
        </div>

        {/* Contact Details */}
        <div className="space-y-4">
          <h3 className="text-3xl font-semibold text-gray-800">
            Contact Information
          </h3>
          <div>
            <h4 className="text-2xl font-semibold mb-2">Phone Numbers</h4>
            <ul className="list-none space-y-2">
              {restaurant.phone_1 && (
                <li className="text-lg text-gray-700">
                  <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
                  {formatPhones(restaurant.phone_1)}
                </li>
              )}
              {restaurant.phone_2 && (
                <li className="text-lg text-gray-700">
                  <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
                  {formatPhones(restaurant.phone_2)}
                </li>
              )}
              {restaurant.phone_3 && (
                <li className="text-lg text-gray-700">
                  <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
                  {formatPhones(restaurant.phone_3)}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Email Contacts with Unified Button */}
      <div className="flex flex-col items-center justify-center bg-gray-100 p-8 rounded-lg shadow-lg mt-8">
        <h3 className="text-3xl font-semibold text-gray-800">Email Contacts</h3>
        <p>
          If you have any questions or need assistance, feel free to reach out
          via email.
        </p>
        {mailtoLink !== "mailto:" && (
          <a
            href={mailtoLink}
            className="bg-teal-500 hover:bg-teal-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out shadow hover:shadow-md mt-4"
          >
            Email Us
          </a>
        )}
      </div>
    </div>
  );
};

export default MainInformationGrid;
