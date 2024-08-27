"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-4">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-4xl font-bold text-center text-gray-800 mb-12"
        >
          About Us
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex justify-center mb-12"
        >
          <Card className="w-full max-w-4xl overflow-hidden">
            <CardContent className="p-0">
              <Image
                src="/img/animation.gif"
                alt="Animation Placeholder"
                width={500}
                height={400}
                layout="responsive"
                className="rounded-t-lg"
                unoptimized={true}
              />
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          {[
            "We are a team of passionate foodies dedicated to uncovering the finest restaurants, events, rooftops, and hidden spots in NYC.",
            "Our mission is to guide you to the best dining experiences and exciting spots that this vibrant city has to offer.",
            "Whether you're searching for a cozy café, an exquisite rooftop restaurant, or an exclusive event, we have you covered.",
            "If you have any questions or suggestions, feel free to reach out to us.",
          ].map((text, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={index}
            >
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-700">{text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center"
        >
          <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
