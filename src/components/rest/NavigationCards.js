"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, MapPin, Map, UtensilsCrossed } from "lucide-react";

const NavigationCards = () => {
  const navigationItems = [
    { title: "Borough", icon: Building2, link: "/boroughs" },
    { title: "Neighborhoods", icon: Map, link: "/neighborhoods" },
    { title: "Zip Code", icon: MapPin, link: "/postal-codes" },
    { title: "Type", icon: UtensilsCrossed, link: "/types" },
  ];

  return (
    <section className="container mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Explore by Category
        </h2>
        <p className="text-xl text-gray-600">
          Find restaurants based on different categories. Click on any category
          to explore more.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {navigationItems.map((item) => (
          <Link key={item.title} href={item.link} passHref>
            <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <CardHeader>
                <CardTitle className="flex flex-col items-center">
                  <item.icon className="h-12 w-12 text-teal-500 mb-4" />
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  Explore restaurants by {item.title.toLowerCase()}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default NavigationCards;
