"use client";

import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

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
    <section className="bg-gradient-to-b from-teal-50 to-teal-100 text-gray-800 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-teal-800">
            Explore New York City
          </h1>
          <p className="text-xl mb-8 text-center max-w-3xl mx-auto text-teal-600">
            Discover the best private event spaces NYC has to offer, from
            private rooms for events. Curated with love by Javier Jaramillo. 🍽️
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="overflow-hidden shadow-xl">
            <CardContent className="p-0">
              <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={5000}
                className="custom-carousel"
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                  hasPrev && (
                    <button
                      type="button"
                      onClick={onClickHandler}
                      title={label}
                      className="carousel-arrow carousel-arrow-prev"
                    >
                      &#10094;
                    </button>
                  )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                  hasNext && (
                    <button
                      type="button"
                      onClick={onClickHandler}
                      title={label}
                      className="carousel-arrow carousel-arrow-next"
                    >
                      &#10095;
                    </button>
                  )
                }
              >
                {images.map((image, index) => (
                  <div key={index} className="relative aspect-[16/9]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                      style={{ objectFit: "cover" }}
                      priority={index === 0}
                    />
                  </div>
                ))}
              </Carousel>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <style jsx global>{`
        .custom-carousel .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          font-size: 24px;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          z-index: 2;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .custom-carousel .carousel-arrow:hover {
          background-color: rgba(0, 0, 0, 0.7);
        }
        .custom-carousel .carousel-arrow-prev {
          left: 20px;
        }
        .custom-carousel .carousel-arrow-next {
          right: 20px;
        }
      `}</style>
    </section>
  );
};

export default ExploreNYC;
