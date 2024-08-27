"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

const ServicesAndAmenities = ({ restaurant }) => {
  const about = JSON.parse(restaurant.about);

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-3xl font-semibold text-center">
          Services and Amenities
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(about).map(([category, details]) => (
            <Card key={category} className="overflow-hidden">
              <CardHeader className="bg-gray-100">
                <CardTitle className="text-xl font-bold capitalize">
                  {category.replace(/_/g, " ")}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2">
                  {Object.entries(details).map(([detail, isAvailable]) => (
                    <li
                      key={detail}
                      className="flex items-center justify-between"
                    >
                      <span className="capitalize">
                        {detail.replace(/_/g, " ")}
                      </span>
                      <Badge
                        variant={isAvailable ? "default" : "secondary"}
                        className="ml-2"
                      >
                        {isAvailable ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <X className="h-4 w-4 text-red-500" />
                        )}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ServicesAndAmenities;
