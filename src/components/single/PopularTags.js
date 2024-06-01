import React from "react";

const PopularTags = ({ restaurant }) => {
  const tags = restaurant.reviews_tags
    ? restaurant.reviews_tags.split(", ")
    : [];

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mt-8">
      <h2 className="text-4xl font-bold text-center mb-6">Popular Tags</h2>
      <div className="flex flex-wrap justify-center gap-2">
        {tags.length > 0 ? (
          tags.map((tag, index) => (
            <span
              key={index}
              className="bg-teal-300 text-teal-900 text-sm font-semibold px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))
        ) : (
          <p className="text-gray-500">No available tags</p>
        )}
      </div>
    </div>
  );
};

export default PopularTags;
