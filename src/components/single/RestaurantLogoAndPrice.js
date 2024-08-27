"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DollarSign } from "lucide-react";

const RestaurantLogoAndPrice = ({ restaurant }) => {
  const getPriceRangeBadge = (range) => {
    const priceMap = {
      $: "Low",
      $$: "Medium",
      $$$: "High",
      $$$$: "Very High",
    };
    return priceMap[range] || "Unknown";
  };

  return (
    <Card className="mb-8">
      <CardHeader className="flex flex-col items-center">
        <Avatar className="w-32 h-32">
          <AvatarImage
            src={restaurant.logo || "/img/restaurant.png"}
            alt={restaurant.name}
          />
          <AvatarFallback>{restaurant.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <CardTitle className="mt-4 text-2xl font-bold">
          {restaurant.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Price Range
        </h2>
        <Badge variant="outline" className="text-lg px-4 py-2">
          <DollarSign className="mr-1 h-5 w-5" />
          {restaurant.range || "$$$"}
        </Badge>
        <p className="mt-2 text-sm text-gray-500">
          {getPriceRangeBadge(restaurant.range || "$$$")}
        </p>
      </CardContent>
    </Card>
  );
};

export default RestaurantLogoAndPrice;
