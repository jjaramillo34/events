import React from "react";
import { getBaseUrl } from "../../../../helpers/getBaseUrl";
import MainLayout from "@/components/layouts/MainLayout";
import Breadcrumbs from "@/components/borough/Breadcrumbs";
import ImageOverlay from "@/components/borough/ImageOverlay";
import BoroughDetail from "@/components/borough/BoroughDetail";
import RestaurantsSection from "@/components/borough/RestaurantsSection";

const fetchBorough = async (borough_slug) => {
  const baseUrl = getBaseUrl();
  const response = await fetch(`${baseUrl}/api/borough/${borough_slug}`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();

  return data;
};

const BoroughPage = async ({ params }) => {
  const { borough_slug } = params;

  const borough = await fetchBorough(borough_slug);

  try {
    return (
      <main>
        <section className="bg-blue-100 shadow-2xl rounded-xl overflow-hidden">
          <div className="container mx-auto px-6 py-10 max-w-12xl">
            <Breadcrumbs borough={borough} />
            <ImageOverlay borough={borough} />
            <BoroughDetail borough={borough} />
            <RestaurantsSection borough={borough} />
          </div>
        </section>
      </main>
    );
  } catch (error) {
    return (
      <MainLayout title="Borough">
        <div className="container mx-auto text-center my-8">
          <h2 className="text-4xl font-bold text-gray-800 my-4">Borough</h2>
          <p className="text-red-500">Error: {error.message}</p>
        </div>
      </MainLayout>
    );
  }
};

export default BoroughPage;
