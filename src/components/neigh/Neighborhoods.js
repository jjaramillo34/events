"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getBaseUrl } from "../../../helpers/getBaseUrl";

const Neighborhoods = () => {
  const [neighborhoods, setNeighborhoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNeighborhoods = async () => {
      try {
        const baseurl = getBaseUrl();
        const response = await fetch(`${baseurl}/api/neighborhoods`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setNeighborhoods(data.cities);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNeighborhoods();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="bg-gray-100 py-5">
      <div className="container mx-auto text-center">
        {neighborhoods.map((city) => (
          <div key={city.name} className="mb-6">
            <h2 className="text-3xl font-bold text-gray-800">
              {city.name} |{" "}
              <span className="text-lg text-gray-600">
                {city.neighborhoods.length} neighborhoods
              </span>
            </h2>
            <p className="text-gray-600">
              Explore what each neighborhood in {city.name} has to offer, from
              dining to nightlife.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {city.neighborhoods.map((neighborhood) => (
                <Link
                  key={neighborhood.slug}
                  href={`/neighborhood/${neighborhood.slug}`}
                  className="bg-black text-white hover:bg-[#B5DCDF] text-white font-medium py-2 px-4 rounded-full transition duration-300 ease-in-out opacity-90 hover:opacity-100"
                  passHref
                >
                  {neighborhood.name}
                </Link>
              ))}
            </div>
            <hr className="my-4 border-gray-300" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Neighborhoods;
