"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Heart,
  Smile,
  Rocket,
  Heart as HeartIcon,
  Flower,
  Home,
} from "lucide-react";

const Dedication = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const dedicationData = [
    {
      icon: Heart,
      title: "To My Wife, Cris",
      content: "Your unwavering support and love are my greatest strengths. ❤️",
    },
    {
      icon: Smile,
      title: "To My Daughter, Sofia",
      content:
        "Your smile brings light to my darkest days and fuels my drive to succeed. You are my sunshine. 🌞",
    },
    {
      icon: Rocket,
      title: "To My Son, Mateo",
      content:
        "Your boundless energy and curiosity inspire me to keep pushing forward. You are my rock. 💪",
    },
    {
      icon: HeartIcon,
      title: "Thanks to God",
      content: "I thank God for His endless blessings and guidance. 🙏",
    },
    {
      icon: Flower,
      title: "To My Mother",
      content:
        "I am eternally grateful to my mother, whose wisdom and love have shaped me into the person I am today. 🌹",
    },
    {
      icon: Home,
      title: "To My Family",
      content:
        "A heartfelt thanks to my entire family for your love, support, and encouragement. You are my home. 🏡",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Dedication
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dedicationData.map((item, index) => (
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

export default Dedication;
