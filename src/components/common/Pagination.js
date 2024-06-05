import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Pagination = ({ page, totalPages }) => {
  const getPageNumbers = (maxPagesToShow) => {
    const pages = [];
    let startPage = Math.max(1, page - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    // Adjust startPage if there are less than maxPagesToShow pages remaining
    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      {page > 1 && (
        <Link
          href={`/restaurants/${page - 1}`}
          passHref
          className="flex items-center bg-teal-600 border border-teal-600 text-white hover:bg-teal-700 py-2 px-3 rounded-full transition duration-300"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </Link>
      )}

      {/* Mobile view (5 pages) */}
      <div className="block sm:hidden">
        {getPageNumbers(5).map((pageNumber) => (
          <Link
            key={pageNumber}
            href={`/restaurants/${pageNumber}`}
            passHref
            className={`flex items-center border ${
              pageNumber === page
                ? "bg-teal-700 text-white"
                : "bg-white text-teal-600 hover:bg-teal-600 hover:text-white"
            } py-2 px-3 rounded-full transition duration-300`}
          >
            {pageNumber}
          </Link>
        ))}
      </div>

      {/* Desktop view (10 pages) */}
      <div className="hidden sm:block">
        {getPageNumbers(10).map((pageNumber) => (
          <Link
            key={pageNumber}
            href={`/restaurants/${pageNumber}`}
            passHref
            className={`flex items-center border ${
              pageNumber === page
                ? "bg-teal-700 text-white"
                : "bg-white text-teal-600 hover:bg-teal-600 hover:text-white"
            } py-2 px-3 rounded-full transition duration-300`}
          >
            {pageNumber}
          </Link>
        ))}
      </div>

      {page < totalPages && (
        <Link
          href={`/restaurants/${page + 1}`}
          passHref
          className="flex items-center bg-teal-600 border border-teal-600 text-white hover:bg-teal-700 py-2 px-3 rounded-full transition duration-300"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </Link>
      )}
    </div>
  );
};

export default Pagination;
