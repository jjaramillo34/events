import React from "react";
import Link from "next/link";
import MainLayout from "@/components/layouts/MainLayout";
import RestaurantsList from "@/components/rest/RestaurantList";
import Hero from "@/components/rest/Hero";
import NavigationCards from "@/components/rest/NavigationCards";
import { getBaseUrl } from "../../../../helpers/getBaseUrl";

const fetchRestaurants = async (page) => {
  const baseUrl = getBaseUrl();
  const response = await fetch(`${baseUrl}/api/restaurants/${page}`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
};

const RestaurantsPage = async ({ params }) => {
  try {
    const page = parseInt(params.page, 10) || 1;
    const { restaurants, total_pages } = await fetchRestaurants(page);

    return (
      <MainLayout title="Restaurants">
        {/* Hero Section */}
        <Hero />
        {/* Navigation Cards */}
        <NavigationCards />

        {/* Add a section for the restaurants list here */}
        <div className="section bg-gray-100 w-full py-8" id="restaurants">
          <div className="container mx-auto text-center my-8">
            <h2 className="text-4xl font-bold text-gray-800 my-4">
              Restaurants
            </h2>
            <RestaurantsList
              restaurants={restaurants}
              page={page}
              totalPages={total_pages}
            />
          </div>
        </div>
      </MainLayout>
    );
  } catch (error) {
    return (
      <MainLayout title="Restaurants">
        <div className="container mx-auto text-center my-8">
          <h2 className="text-4xl font-bold text-gray-800 my-4">Restaurants</h2>
          <p className="text-red-500">Error: {error.message}</p>
          <div className="my-8">
            <Link href="/">
              <a className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full transition-colors duration-300">
                Go Back Home
              </a>
            </Link>
            <Link href="/restaurants/1">
              <a className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full transition-colors duration-300 ml-4">
                Go to Restaurants
              </a>
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }
};

export default RestaurantsPage;
