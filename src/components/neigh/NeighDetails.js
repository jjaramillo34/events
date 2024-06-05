import React from "react";
import Image from "next/image";
import Link from "next/link";

const NeighDetails = ({ neighborhood }) => {
  return (
    <div className="relative group mb-8">
      <div className="mx-auto px-12 py-10 bg-gradient-to-tr from-gray-100 to-gray-300 shadow-2xl rounded-3xl mb-8">
        <h2 className="text-6xl font-semibold text-center text-gray-900 mb-8">
          Overview
        </h2>
        <p className="text-xl font-medium text-gray-800 leading-relaxed italic text-justify">
          {neighborhood.summary}
        </p>
        <div className="mt-8">
          <h1 className="text-4xl font-bold text-gray-800">Demographics</h1>
          <p className="text-xl font-medium text-gray-800 leading-relaxed italic text-justify mt-4">
            {neighborhood.demographics}
          </p>
        </div>
        <div className="mt-8">
          <h1 className="text-4xl font-bold text-gray-800">Places</h1>
          <p className="text-xl font-medium text-gray-800 leading-relaxed italic text-justify mt-4">
            {neighborhood.places}
          </p>
        </div>
        <div className="mt-8">
          <Link
            href="#restaurants"
            passHref
            className="text-lg bg-teal-300 hover:bg-black text-white font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            View Restaurants
          </Link>
        </div>
      </div>

      <div className="mx-auto px-12 py-10 bg-white shadow-2xl rounded-3xl my-6">
        <h2 className="text-6xl font-semibold text-center text-gray-900 mb-8 pb-4">
          Transportation Options
        </h2>
        <div className="space-y-8">
          {neighborhood.transportation.subway_lines.length > 0 && (
            <div>
              <h3 className="text-4xl font-bold text-gray-800">
                Subway Access
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
                {neighborhood.transportation.subway_lines.map((subwayLine) => (
                  <div
                    key={subwayLine}
                    className="flex items-center justify-center bg-gray-200 rounded-lg p-4 hover:bg-gray-300 transition-colors duration-300"
                  >
                    <Image
                      src={`/img/subway/${subwayLine}.png`}
                      alt={`Subway line ${subwayLine}`}
                      width={64}
                      height={64}
                      className="w-16 h-16"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          {neighborhood.transportation.bus_lines.length > 0 && (
            <div>
              <h3 className="text-4xl font-bold text-gray-800">Bus Routes</h3>
              <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4 mt-4">
                {neighborhood.transportation.bus_lines.map((busRoute) => (
                  <div
                    key={busRoute}
                    className="flex items-center justify-center bg-gray-200 rounded-lg p-4 hover:bg-gray-300 transition-colors duration-300"
                  >
                    <p className="text-2xl font-semibold text-gray-800">
                      {busRoute}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {neighborhood.transportation.walkability && (
            <div>
              <h3 className="text-4xl font-bold text-gray-800">Walkability</h3>
              <p className="text-xl font-medium text-gray-800 leading-relaxed italic text-justify mt-4">
                {neighborhood.transportation.walkability}
              </p>
            </div>
          )}
          {neighborhood.transportation.bike_paths && (
            <div>
              <h3 className="text-4xl font-bold text-gray-800">Bike Paths</h3>
              <p className="text-xl font-medium text-gray-800 leading-relaxed italic text-justify mt-4">
                {neighborhood.transportation.bike_paths}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NeighDetails;
