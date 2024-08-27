"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gray-100 py-32">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://img.freepik.com/free-photo/top-view-food-frame-with-copy-space_23-2148724190.jpg"
          alt="Jumbotron Background"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 text-shadow">
            Discover the Best Restaurants for Your Events
          </h1>
          <p className="text-xl md:text-2xl text-white mb-12 max-w-4xl mx-auto text-shadow">
            Find the perfect dining experience for your events. Browse through
            our curated list of restaurants.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <form className="flex">
            <Input
              type="text"
              placeholder="Search for restaurants..."
              className="rounded-l-full flex-grow bg-white/90 text-gray-800 placeholder-gray-500 border-none"
            />
            <Button
              type="submit"
              size="lg"
              className="rounded-r-full bg-teal-500 hover:bg-teal-600"
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

<style jsx global>{`
  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
`}</style>;
