"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";
import { MapPin, AlertCircle } from "lucide-react";

const StreetView = ({ restaurant }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl font-bold text-center flex items-center justify-center">
          <MapPin className="mr-2 h-6 w-6" />
          Street View
        </CardTitle>
      </CardHeader>
      <CardContent>
        <AspectRatio
          ratio={16 / 9}
          className="bg-muted rounded-md overflow-hidden"
        >
          {isLoading && <Skeleton className="w-full h-full" />}
          {!hasError ? (
            <Image
              src={restaurant.street_view}
              alt={`Street View of ${restaurant.name}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-muted text-muted-foreground p-4">
              <AlertCircle className="h-12 w-12 mb-2 text-yellow-500" />
              <p className="text-center">Street view image not available</p>
            </div>
          )}
        </AspectRatio>
      </CardContent>
    </Card>
  );
};

export default StreetView;
