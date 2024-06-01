import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Pagination = ({ page, totalPages }) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 10;
    const endPage = Math.min(totalPages, maxPagesToShow);
    for (let i = 1; i <= endPage; i++) {
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
      {getPageNumbers().map((pageNumber) => (
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
      {totalPages > 10 && page < totalPages && (
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
