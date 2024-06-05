"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleDropdown = (event) => {
    event.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header>
      <nav className="bg-gray-800 bg-opacity-90 p-3 text-white">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Restaurants Directory
          </Link>
          <button
            id="navbarToggle"
            className="block md:hidden"
            onClick={toggleNavbar}
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <div
            className={`${
              isNavOpen ? "block" : "hidden"
            } w-full mt-4 md:block md:mt-0 md:w-auto`}
            id="navbarNav"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link
                  href="/"
                  className="block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 md:hover:text-blue-300 md:hover:bg-gray-900 uppercase font-semibold"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 md:hover:text-blue-300 md:hover:bg-gray-900 uppercase font-semibold"
                >
                  About
                </Link>
              </li>
              <li
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <a
                  href="/restaurants"
                  className="block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 md:hover:text-blue-300 md:hover:bg-gray-900 uppercase font-semibold cursor-pointer"
                  onClick={(e) => toggleDropdown(e)}
                >
                  Events
                </a>
                <div
                  className={`${
                    isDropdownOpen ? "block" : "hidden"
                  } absolute bg-white shadow-lg rounded-md mt-2`}
                >
                  <Link
                    href="/restaurants/neighborhoods"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Neighborhoods
                  </Link>
                  <Link
                    href="/restaurants/spots"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Spots
                  </Link>
                  <Link
                    href="/restaurants/rooftops"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Rooftops
                  </Link>
                </div>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 md:hover:text-blue-300 md:hover:bg-gray-900 uppercase font-semibold"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
