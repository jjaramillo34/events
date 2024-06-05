"use client";

import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ExploreNYC = () => {
  const images = [
    {
      src: "/img/img1.jpg",
      alt: "Manhattan Skyline, New York City, Cityscape, Urban, Buildings",
    },
    {
      src: "/img/img2.jpg",
      alt: "New York City, Manhattan, Empire State Building, Skyscraper, Urban",
    },
    {
      src: "/img/img3.jpg",
      alt: "New York City, Manhattan, Empire State Building, Skyscraper, Urban",
    },
    {
      src: "/img/img4.jpg",
      alt: "New York City, Manhattan, Empire State Building, Skyscraper, Urban",
    },
    {
      src: "/img/img5.jpg",
      alt: "New York City, Manhattan, Empire State Building, Skyscraper, Urban",
    },
    {
      src: "/img/img6.jpg",
      alt: "New York City, Manhattan, Empire State Building, Skyscraper, Urban",
    },
    {
      src: "/img/img7.jpg",
      alt: "New York City, Manhattan, Empire State Building, Skyscraper, Urban",
    },
    {
      src: "/img/img8.jpg",
      alt: "New York City, Manhattan, Empire State Building, Skyscraper, Urban",
    },
  ];

  return (
    <section className="bg-pastel-pink text-gray-800 py-5 text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-3">Explore New York City</h1>
        <p className="text-xl mb-4">
          Discover the best private event spaces NYC has to offer, from private
          rooms for events. Curated with love by Javier Jaramillo. 🍽️
        </p>
        <div className="relative">
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={5000}
          >
            {images.map((image, index) => (
              <div key={index} className="relative h-[800px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1920}
                  height={1080}
                  priority={true}
                  className="block w-full h-full object-cover"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ExploreNYC;
