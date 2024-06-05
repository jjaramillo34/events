"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const boroughs_names = [
  { name: "Manhattan", svgPath: "/img/svg/manhattan.png" },
  { name: "Queens", svgPath: "/img/svg/queens.svg" },
  { name: "Bronx", svgPath: "/img/svg/bronx.svg" },
  { name: "Brooklyn", svgPath: "/img/svg/brooklyn.png" },
  { name: "Staten Island", svgPath: "/img/svg/staten-island.svg" },
];

const BoroughDetails = () => {
  const [boroughs, setBoroughs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBoroughs = async () => {
      try {
        const response = await fetch("/api/boroughs");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setBoroughs(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBoroughs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="section bg-gray-100 w-full py-8" id="borough-details">
      <div className="container mx-auto text-center my-8">
        <h2 className="text-4xl font-bold text-gray-800 my-4">
          Borough Details
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {boroughs.boroughs.map((b) => (
            <div
              key={b.name}
              className="bg-white shadow-lg rounded-lg overflow-hidden w-72"
            >
              <Image
                src={"/img/svg/" + b.slug.toLowerCase() + ".png"}
                alt={b.name}
                className="w-full h-64 object-contain p-4"
                width={300}
                height={300}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {b.name}
                  {" | "}
                  <span className="text-lg text-gray-600">{b.count}</span>
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800"></h3>
        </div>
      </div>
    </div>
  );
};

export default BoroughDetails;
