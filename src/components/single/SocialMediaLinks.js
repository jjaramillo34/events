import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const SocialMediaLinks = ({ restaurant }) => {
  const socialMedia = [
    {
      platform: "facebook",
      icon: faFacebookF,
      color: "text-blue-600",
      hoverColor: "hover:text-blue-800",
    },
    {
      platform: "instagram",
      icon: faInstagram,
      color: "text-pink-600",
      hoverColor: "hover:text-pink-800",
    },
    {
      platform: "twitter",
      icon: faTwitter,
      color: "text-blue-400",
      hoverColor: "hover:text-blue-600",
    },
    {
      platform: "linkedin",
      icon: faLinkedin,
      color: "text-blue-700",
      hoverColor: "hover:text-blue-900",
    },
    {
      platform: "whatsapp",
      icon: faWhatsapp,
      color: "text-green-400",
      hoverColor: "hover:text-green-600",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl bg-white p-8 rounded-lg shadow-lg mt-8">
      <h2 className="text-4xl font-bold text-center mb-6">
        Connect With {restaurant.name}
      </h2>
      <div className="flex justify-center gap-6">
        {socialMedia.map((media) =>
          restaurant[media.platform] ? (
            <a
              key={media.platform}
              href={restaurant[media.platform]}
              className={`${media.color} ${media.hoverColor} transition-colors duration-300`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={media.icon} className="text-3xl" />
            </a>
          ) : null
        )}
      </div>
      {!socialMedia.some((media) => restaurant[media.platform]) && (
        <p className="text-center text-gray-500">
          No social media links available.
        </p>
      )}
    </div>
  );
};

export default SocialMediaLinks;
