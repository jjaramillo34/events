import React from "react";
import Image from "next/image";
import MainLayout from "../../../components/layouts/MainLayout";
import RestaurantsList from "../../../components/RestaurantList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const fetchRestaurants = async (page) => {
  const response = await fetch(`/api/restaurants/${page}`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
};

const RestaurantsPage = async ({ params }) => {
  const page = parseInt(params.page, 10) || 1;
  const { restaurants, total_pages } = await fetchRestaurants(page);

  return (
    <MainLayout title="Restaurants">
      {/* Add a hero section here */}
      <div className="relative hero bg-gray-100 py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://img.freepik.com/free-photo/top-view-food-frame-with-copy-space_23-2148724190.jpg"
            alt="Jumbotron Background"
            layout="fill"
            objectFit="cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl font-bold text-white" data-aos="fade-up">
            Discover the best restaurants for your Events
          </h1>
          <p
            className="text-gray-200 mt-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Find the perfect dining experience for your events. Browse through
            our curated list of restaurants.
          </p>
        </div>
        <div
          className="container mx-auto relative z-10 mt-8"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <form className="flex justify-center">
            <input
              type="text"
              placeholder="Search for restaurants..."
              className="w-full md:w-1/2 px-4 py-2 rounded-l-full focus:outline-none text-gray-800"
            />
            <button className="bg-teal-400 text-white px-4 py-2 rounded-r-full flex items-center">
              <FontAwesomeIcon icon={faSearch} className="mr-2" />
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="section bg-gray-100 w-full py-8" id="restaurants">
        <div className="container mx-auto text-center my-8">
          <h2 className="text-4xl font-bold text-gray-800 my-4">Restaurants</h2>
          <RestaurantsList
            restaurants={restaurants}
            page={page}
            totalPages={total_pages}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default RestaurantsPage;
