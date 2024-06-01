import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faStar as farStar,
} from "@fortawesome/free-solid-svg-icons";

const ReviewsAndRatings = ({ restaurant }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mt-8">
      <h2 className="text-4xl font-bold text-center mb-6">Reviews & Ratings</h2>
      <p className="text-xl text-center mb-6">
        Average Rating: {restaurant.rating} (based on {restaurant.reviews}{" "}
        reviews)
      </p>
      <div className="flex justify-center space-x-4 mb-6">
        {[...Array(Math.floor(restaurant.rating))].map((_, i) => (
          <FontAwesomeIcon
            key={i}
            icon={faStar}
            className="text-yellow-400 text-3xl animate__animated animate__fadeIn"
          />
        ))}
        {restaurant.rating % 1 !== 0 && (
          <FontAwesomeIcon
            icon={faStarHalfAlt}
            className="text-yellow-400 text-3xl animate__animated animate__fadeIn"
          />
        )}
        {[...Array(5 - Math.ceil(restaurant.rating))].map((_, i) => (
          <FontAwesomeIcon
            key={i}
            icon={farStar}
            className="text-yellow-400 text-3xl animate__animated animate__fadeIn"
          />
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {[...Array(5)].map((_, i) => {
          const score = restaurant[`reviews_per_score_${i + 1}`];
          return (
            score > 0 && (
              <div key={i} className="bg-gray-100 p-4 rounded-lg shadow">
                <div className="text-yellow-400">
                  {[...Array(i + 1)].map((_, j) => (
                    <FontAwesomeIcon key={j} icon={faStar} />
                  ))}
                </div>
                <p className="text-sm text-gray-700">
                  {score} review{score > 1 ? "s" : ""} with {i + 1} star
                  {i + 1 > 1 ? "s" : ""}
                </p>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default ReviewsAndRatings;
