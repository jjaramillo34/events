"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TrendingUp,
  Utensils,
  DollarSign,
  MapPin,
  Percent,
  Calendar,
} from "lucide-react";

const DataResearchInsights = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const insightData = [
    {
      icon: Utensils,
      title: "Top 10 Restaurants",
      content:
        "Explore the top 10 most popular restaurants in NYC, offering a variety of cuisines and dining experiences.",
    },
    {
      icon: DollarSign,
      title: "Cost Analysis",
      content:
        "Get insights into the average cost of dining out in Manhattan and plan your budget accordingly.",
    },
    {
      icon: MapPin,
      title: "Foodie Neighborhoods",
      content:
        "Discover the best neighborhoods for foodies in Brooklyn, known for their diverse and vibrant food scenes.",
    },
    {
      icon: Percent,
      title: "Discount Offers",
      content:
        "Find the latest discount offers and deals at popular restaurants and save on your dining experiences.",
    },
    {
      icon: Calendar,
      title: "Upcoming Events",
      content:
        "Stay informed about upcoming food festivals, restaurant openings, and special events in NYC.",
    },
    {
      icon: Utensils,
      title: "Cuisine Highlights",
      content:
        "Learn about the latest cuisine trends and discover new dining experiences and hidden gems.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <TrendingUp className="w-16 h-16 text-teal-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Data Research Insights
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            Discover the latest trends and insights from our data research team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insightData.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center space-x-4">
                  <item.icon className="w-8 h-8 text-teal-500" />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataResearchInsights;
