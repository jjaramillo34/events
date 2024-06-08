import React from "react";
import { getBaseUrl } from "../../../../helpers/getBaseUrl";
import MainLayout from "../../../components/layouts/MainLayout";
import Breadcrumbs from "../../../components/single/Breadcrumbs";
import RestaurantImageOverlay from "../../../components/single/RestaurantImageOverlay";
import RestaurantLogoAndPrice from "@/components/single/RestaurantLogoAndPrice";
import MainInformationGrid from "@/components/single/MainInformationGrid";
import ServicesAndAmenities from "@/components/single/ServicesAndAmenities";
import WorkingHours from "@/components/single/WorkingHours";
import OtherHours from "@/components/single/OtherHours";
import ReviewsAndRatings from "@/components/single/ReviewsAndRatings";
import PopularTags from "@/components/single/PopularTags";
import LocationMap from "@/components/single/LocationMap";
import SocialMediaLinks from "@/components/single/SocialMediaLinks";
import StreetView from "@/components/single/StreetView";
import UserActionButtons from "@/components/single/UserActionButtons";

const fetchRestaurantData = async (slug) => {
  const baseUrl = getBaseUrl();

  const response = await fetch(`${baseUrl}/api/restaurant/${slug}`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
};

const RestaurantPage = async ({ params }) => {
  const { slug } = params;
  try {
    const restaurant = await fetchRestaurantData(slug);

    return (
      <MainLayout title={restaurant.name}>
        {/* Breadcrumbs */}
        <Breadcrumbs restaurant={restaurant} />
        {/* Image Overlay */}
        <RestaurantImageOverlay restaurant={restaurant} />
        {/* Restaurant Logo and Price */}
        <RestaurantLogoAndPrice restaurant={restaurant} />
        {/* Main Information Grid */}
        <MainInformationGrid restaurant={restaurant} />
        {/* Services and Amenities */}
        <ServicesAndAmenities restaurant={restaurant} />
        {/* Working Hours */}
        <WorkingHours restaurant={restaurant} />
        {/* Other Hours */}
        <OtherHours restaurant={restaurant} />
        {/* Reviews and Ratings */}
        <ReviewsAndRatings restaurant={restaurant} />
        {/* Popular Tags */}
        <PopularTags restaurant={restaurant} />
        {/* Location Map */}
        <LocationMap restaurant={restaurant} />
        {/* Social Media Links */}
        <SocialMediaLinks restaurant={restaurant} />
        {/* Street View */}
        <StreetView restaurant={restaurant} />
        {/* User Action Buttons */}
        <UserActionButtons />
      </MainLayout>
    );
  } catch (error) {
    console.error("Error fetching restaurant data:", error);
    return (
      <MainLayout title="Error">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-red-500">
              Error fetching restaurant data
            </h2>
            <p className="text-gray-600">
              An error occurred while fetching restaurant data. Please try again
              later.
            </p>
          </div>
        </div>
      </MainLayout>
    );
  }
};

export default RestaurantPage;
