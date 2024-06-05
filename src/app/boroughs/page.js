import React from "react";
import { getBaseUrl } from "../../../helpers/getBaseUrl";
import MainLayout from "@/components/layouts/MainLayout";
import ExploreNYC from "@/components/neigh/ExploreNYC";
import Hero from "@/components/borough/Hero";
import BoroughDetails from "@/components/borough/BoroughDetails";

const fetchBoroughs = async () => {
  const baseUrl = getBaseUrl();
  //const response = await fetch(`${baseUrl}/api/boroughs`);
  const response = await fetch(`http://localhost:3000/api/boroughs`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();

  return data;
};

const BoroughsPage = async () => {
  try {
    const boroughs = await fetchBoroughs();

    return (
      <MainLayout title="Boroughs">
        <ExploreNYC />
        <Hero />
        <BoroughDetails boroughs={boroughs} />
      </MainLayout>
    );
  } catch (error) {
    return (
      <MainLayout title="Boroughs">
        <div className="container mx-auto text-center my-8">
          <h2 className="text-4xl font-bold text-gray-800 my-4">Boroughs</h2>
          <p className="text-red-500">Error: {error.message}</p>
        </div>
      </MainLayout>
    );
  }
};

export default BoroughsPage;
