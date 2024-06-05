import React from "react";
import Link from "next/link";
import { getBaseUrl } from "../../../helpers/getBaseUrl";
import MainLayout from "@/components/layouts/MainLayout";
import ExploreNYC from "@/components/neigh/ExploreNYC";
import PostalCodes from "@/components/postalcodes/PostalCodes";

const fetchPostalCodes = async () => {
  const baseUrl = getBaseUrl();
  const response = await fetch(`${baseUrl}/api/zipcodes`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
};

const PostalCodesPage = async () => {
  try {
    const neighborhoods = await fetchPostalCodes();

    return (
      <MainLayout title="Neighborhoods">
        <ExploreNYC />
        <PostalCodes neighborhoods={neighborhoods} />
      </MainLayout>
    );
  } catch (error) {
    return (
      <MainLayout title="Neighborhoods">
        <div className="container mx-auto text-center my-8">
          <h2 className="text-4xl font-bold text-gray-800 my-4">
            Neighborhoods
          </h2>
          <p className="text-red-500">Error: {error.message}</p>
          <div className="my-8">
            <Link
              href="/"
              className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full transition-colors duration-300"
            >
              Go Back Home
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }
};

export default PostalCodesPage;
