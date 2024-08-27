"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Building, MapPin } from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description, link, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-teal-600" />
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button asChild variant="outline" className="w-full">
          <Link href={link}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      icon: Calendar,
      title: "Events",
      description:
        "Discover the best venues for hosting your events. From corporate gatherings to private parties, we have got you covered.",
      link: "/restaurants/1",
    },
    {
      icon: Building,
      title: "Rooftops",
      description:
        "Enjoy stunning views and great ambiance at our curated list of rooftop spots. Perfect for a night out or a relaxing evening.",
      link: "/rooftops",
    },
    {
      icon: MapPin,
      title: "Spots",
      description:
        "Find the hottest spots in town. Whether you're looking for a cozy cafe or a vibrant nightclub, we have recommendations for you.",
      link: "/spots",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
