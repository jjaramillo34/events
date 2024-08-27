"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const RestaurantImageOverlay = ({ restaurant }) => {
  return (
    <Card className="w-full overflow-hidden mb-8 max-w-[800px] mx-auto">
      <AspectRatio ratio={16 / 9}>
        <Image
          src={`/img/res/${restaurant.slug}.jpg`}
          alt={restaurant.name}
          fill
          sizes="(max-width: 1000px) 100vw, 1000px"
          priority
          className="object-cover"
          onError={(e) => {
            e.target.onerror = null; // Prevent infinite loop
            e.target.src = "/img/placeholder-restaurant.jpg"; // Fallback image
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20 flex flex-col justify-end p-4 md:p-6 lg:p-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2 md:mb-3 text-white drop-shadow-lg">
            {restaurant.name}
          </h1>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="text-xs md:text-sm">
              {restaurant.type}
            </Badge>
            <Badge
              variant="outline"
              className="text-xs md:text-sm text-white border-white"
            >
              {restaurant.category}
            </Badge>
          </div>
        </div>
      </AspectRatio>
    </Card>
  );
};

export default RestaurantImageOverlay;
