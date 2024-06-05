import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "aos/dist/aos.css"; // Import AOS styles

const Hero = () => {
  return (
    <div className="relative hero bg-gray-100 py-16">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://img.freepik.com/free-photo/top-view-food-frame-with-copy-space_23-2148724190.jpg"
          alt="Jumbotron Background"
          layout="fill"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="container mx-auto text-center relative z-10">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg"
          data-aos="fade-up"
        >
          Discover the Best Restaurants for Your Events
        </h1>
        <p
          className="text-gray-200 mt-4 text-lg md:text-xl lg:text-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Find the perfect dining experience for your events. Browse through our
          curated list of restaurants.
        </p>
      </div>
      <div
        className="container mx-auto relative z-10 mt-8"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <form className="flex justify-center">
          <input
            type="text"
            placeholder="Search for restaurants..."
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
          />
          <button className="bg-teal-500 text-white px-6 py-2 rounded-r-full hover:bg-teal-600 transition duration-300">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
