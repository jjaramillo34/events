"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AboutUsSection = () => {
  return (
    <div
      className="section bg-gray-800 bg-opacity-90 w-full py-16 text-white"
      id="about-us"
    >
      <div className="container mx-auto text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold my-8 uppercase"
        >
          About Us
        </motion.h2>
        <Card className="bg-transparent border-none shadow-none">
          <CardContent className="p-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <div className="w-full lg:w-2/3">
                <Image
                  src="/img/about.jpg"
                  alt="Dining experiences crafted by our team"
                  className="rounded shadow-lg"
                  width={800}
                  height={500}
                  layout="responsive"
                />
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg my-8 max-w-3xl mx-auto"
            >
              Discover extraordinary dining events, scenic rooftop gatherings,
              and unique culinary spots curated by our dedicated team. We are
              passionate about creating memorable experiences in the perfect
              venue, whether it&apos;s an intimate dinner or a grand
              celebration. Join us on this journey to explore and enjoy the best
              spots your city has to offer.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8"
            >
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutUsSection;
