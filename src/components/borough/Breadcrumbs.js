import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

const Breadcrumbs = ({ borough }) => {
  return (
    <div className="container mx-auto px-6 py-10 max-w-12xl">
      <nav className="text-gray-500 mb-8">
        <ol className="list-none p-0 inline-flex">
          <li className="mr-2 flex items-center">
            <Link
              href="/"
              passHref
              className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-lg transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faHome} className="mr-1" />
              Home
            </Link>
          </li>
          <li className="mr-2 flex items-center">
            <Link
              href="/boroughs"
              passHref
              className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-lg transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faMapMarkedAlt} className="mr-1" />
              Boroughs
            </Link>
          </li>
          <li className="mr-2 flex items-center">
            <Link
              href={`/neighborhood/${borough.borough_slug}`}
              passHref
              className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-lg transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faMapMarkedAlt} className="mr-1" />
              {borough.name}
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
