"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tag } from "lucide-react";

const PopularTags = ({ restaurant }) => {
  const tags = restaurant.reviews_tags
    ? restaurant.reviews_tags.split(", ")
    : [];

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center flex items-center justify-center">
          <Tag className="mr-2" />
          Popular Tags
        </CardTitle>
      </CardHeader>
      <CardContent>
        {tags.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-2">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-sm font-semibold px-3 py-1 bg-teal-100 text-teal-800 hover:bg-teal-200 transition-colors cursor-pointer"
              >
                {tag}
              </Badge>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No available tags</p>
        )}
      </CardContent>
    </Card>
  );
};

export default PopularTags;
