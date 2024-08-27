"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code,
  Search,
  User,
  Zap,
  Wand2,
  Filter,
  Database,
  MessageSquare,
} from "lucide-react";

const DevelopmentUpdates = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const updateData = [
    {
      icon: Search,
      title: "New Search Functionality",
      content:
        "Added new search functionality for faster restaurant discovery.",
    },
    {
      icon: User,
      title: "Improved User Interface",
      content: "Improved user interface for a better browsing experience.",
    },
    {
      icon: Zap,
      title: "Enhanced Performance",
      content: "Enhanced performance and stability of the platform.",
    },
    {
      icon: Wand2,
      title: "Autocomplete Feature",
      content:
        "Implemented autocomplete feature for search inputs to enhance user experience.",
    },
    {
      icon: Filter,
      title: "Advanced Filters",
      content: "Added advanced filtering options to refine search results.",
    },
    {
      icon: Database,
      title: "Enhanced API",
      content:
        "Improved API performance and added new endpoints for better integration.",
    },
    {
      icon: MessageSquare,
      title: "Comments and Feedback",
      content:
        "Introduced a comments section for user feedback and interaction.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <Code className="w-16 h-16 text-teal-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold">Development Updates</h2>
          <p className="text-xl text-gray-300 mt-4">
            Stay updated with our latest development news and improvements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {updateData.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-gray-800 border-gray-700 h-full">
                <CardHeader className="flex flex-row items-center space-x-4">
                  <item.icon className="w-8 h-8 text-teal-400" />
                  <CardTitle className="text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{item.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentUpdates;
