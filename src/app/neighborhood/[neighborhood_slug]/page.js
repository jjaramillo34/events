import React from "react";
import { getBaseUrl } from "../../../../helpers/getBaseUrl";
import MainLayout from "@/components/layouts/MainLayout";
import Breadcrumbs from "@/components/neigh/Breadcrumbs";
import ImageOverlay from "@/components/neigh/ImageOverlay";
import NeighDetails from "@/components/neigh/NeighDetails";
import RestaurantsSection from "@/components/neigh/RestaurantsSection";

const fetchNeighborhoodData = async (neighborhood_slug) => {
  const baseUrl = getBaseUrl();
  const response = await fetch(
    `${baseUrl}/api/neighborhood/${neighborhood_slug}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();

  return data;
};

const NeighborhoodPage = async ({ params }) => {
  const { neighborhood_slug } = params;
  try {
    const neighborhood = await fetchNeighborhoodData(neighborhood_slug);

    return (
      <MainLayout title={neighborhood.name}>
        <main>
          <section className="bg-blue-100 shadow-2xl rounded-xl overflow-hidden">
            <div className="container mx-auto px-6 py-10 max-w-12xl">
              <Breadcrumbs neighborhood={neighborhood} />
              <ImageOverlay neighborhood={neighborhood} />
              <NeighDetails neighborhood={neighborhood} />
              <RestaurantsSection neighborhood={neighborhood} />
            </div>
          </section>
        </main>
      </MainLayout>
    );
  } catch (error) {
    return (
      <MainLayout title="Neighborhood">
        <div className="container mx-auto text-center my-8">
          <h2 className="text-4xl font-bold text-gray-800 my-4">
            Neighborhood
          </h2>
          <p className="text-red-500">Error: {error.message}</p>
        </div>
      </MainLayout>
    );
  }
};

export default NeighborhoodPage;
