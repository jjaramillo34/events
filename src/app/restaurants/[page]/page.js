import React from "react";
import Link from "next/link";
import { getBaseUrl } from "../../../../helpers/getBaseUrl";
import MainLayout from "@/components/layouts/MainLayout";
import RestaurantsList from "@/components/rest/RestaurantList";
import Hero from "@/components/rest/Hero";
import NavigationCards from "@/components/rest/NavigationCards";

const fetchRestaurants = async (page) => {
  const baseUrl = getBaseUrl();
  console.log("Test this line");
  console.log(baseUrl);
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
            <Link href="/">Go Back Home</Link>
            <Link href="/restaurants/1">Go to Restaurants</Link>
          </div>
        </div>
      </MainLayout>
    );
  }
};

export default RestaurantsPage;
