"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin, Star, StarHalf, DollarSign } from "lucide-react";

const RestaurantCard = ({ restaurant, index }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <StarHalf key={i} className="h-4 w-4 text-yellow-500 fill-current" />
        );
      } else {
        stars.push(<Star key={i} className="h-4 w-4 text-gray-300" />);
      }
    }

    return stars;
  };

  const renderPriceLevel = (priceLevel) => {
    return Array(priceLevel)
      .fill()
      .map((_, index) => (
        <DollarSign
          key={index}
          className="h-4 w-4 text-green-500 fill-current"
        />
      ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        <div className="relative w-full pt-[56.25%]">
          <Image
            src={
              restaurant.photo
                ? `/img/res/${restaurant.slug}.jpg`
                : "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=740"
            }
            alt={restaurant.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            priority={index < 4}
          />
          {restaurant.cuisine && (
            <Badge className="absolute top-2 right-2 bg-black bg-opacity-50 text-white">
              {restaurant.cuisine}
            </Badge>
          )}
        </div>
        <CardContent className="p-4 flex-grow">
          <h3 className="text-xl font-semibold mb-2 truncate">
            {restaurant.name}
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center text-gray-600">
              <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
              <span className="truncate">{restaurant.phone}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
              <span className="truncate">
                {restaurant.full_address.split(",")[0]}
              </span>
            </div>
            {restaurant.rating && (
              <div className="flex items-center justify-between">
                <div className="flex">{renderStars(restaurant.rating)}</div>
                <span className="text-gray-600 ml-2">
                  ({restaurant.rating.toFixed(1)})
                </span>
              </div>
            )}
            {restaurant.price_level && (
              <div className="flex items-center">
                {renderPriceLevel(restaurant.price_level)}
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button
            asChild
            className="w-full bg-teal-500 hover:bg-teal-600 text-white"
          >
            <Link href={`/restaurant/${restaurant.slug}`}>View Details</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default RestaurantCard;
