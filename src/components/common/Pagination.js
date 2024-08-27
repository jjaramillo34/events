"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

const Pagination = ({ page, totalPages }) => {
  const getPageNumbers = (maxPagesToShow) => {
    const pages = [];
    let startPage = Math.max(1, page - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) pages.push("ellipsis");
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) pages.push("ellipsis");
      pages.push(totalPages);
    }

    return pages;
  };

  const renderPageButton = (pageNumber) => (
    <Button
      key={pageNumber}
      variant={pageNumber === page ? "default" : "outline"}
      size="icon"
      asChild
    >
      <Link href={`/restaurants/${pageNumber}`}>{pageNumber}</Link>
    </Button>
  );

  return (
    <nav className="flex justify-center items-center space-x-2 mt-8">
      <Button variant="outline" size="icon" disabled={page <= 1} asChild>
        <Link href={`/restaurants/${page - 1}`}>
          <ChevronLeft className="h-4 w-4" />
        </Link>
      </Button>

      <div className="hidden md:flex space-x-2">
        {getPageNumbers(7).map((pageNumber, index) =>
          pageNumber === "ellipsis" ? (
            <Button
              key={`ellipsis-${index}`}
              variant="outline"
              size="icon"
              disabled
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          ) : (
            renderPageButton(pageNumber)
          )
        )}
      </div>

      <div className="flex md:hidden space-x-2">
        {getPageNumbers(3).map((pageNumber, index) =>
          pageNumber === "ellipsis" ? (
            <Button
              key={`ellipsis-${index}`}
              variant="outline"
              size="icon"
              disabled
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          ) : (
            renderPageButton(pageNumber)
          )
        )}
      </div>

      <Button
        variant="outline"
        size="icon"
        disabled={page >= totalPages}
        asChild
      >
        <Link href={`/restaurants/${page + 1}`}>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </Button>
    </nav>
  );
};

export default Pagination;
