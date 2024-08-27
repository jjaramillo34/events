"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const HeroSection = () => {
  const text = [
    "Restaurants Directory",
    "Events Directory",
    "RoofTops Directory",
    "Spots Directory",
  ];

  return (
    <div className="section bg-hero-pattern bg-cover bg-center bg-fixed p-5 mb-5 w-full flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-4xl bg-black/30 backdrop-blur-sm">
        <CardContent className="text-center p-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white text-4xl font-bold drop-shadow-md"
          >
            <TypeAnimation
              sequence={["Discover the best ", ...text, " in NYC"]}
              wrapper="span"
              speed={20}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-3 text-white text-7xl font-bold drop-shadow-md"
          >
            Welcome to the Restaurants Directory
          </motion.h1>
          <motion.h4
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-3 text-white text-2xl drop-shadow"
          >
            Discover your next great dining experience.
          </motion.h4>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg text-white mb-4 drop-shadow"
          >
            Explore the best private event spaces NYC has to offer, from private
            dining rooms to breathtaking rooftop venues.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-teal-600 hover:bg-black hover:text-white text-white font-bold py-2 px-8 rounded-full uppercase text-lg transition-all duration-300"
            >
              <a href="/restaurants/1">Explore Now</a>
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HeroSection;
