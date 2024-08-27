"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Star, StarHalf } from "lucide-react";

const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => {
        if (i < Math.floor(rating)) {
          return <Star key={i} className="text-yellow-400 fill-current" />;
        } else if (i === Math.floor(rating) && !Number.isInteger(rating)) {
          return <StarHalf key={i} className="text-yellow-400 fill-current" />;
        } else {
          return <Star key={i} className="text-gray-300" />;
        }
      })}
    </div>
  );
};

const ReviewsAndRatings = ({ restaurant }) => {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center">
          Reviews & Ratings
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center mb-6">
          <p className="text-4xl font-bold">{restaurant.rating.toFixed(1)}</p>
          <StarRating rating={restaurant.rating} />
          <p className="text-sm text-gray-500 mt-2">
            Based on {restaurant.reviews} reviews
          </p>
        </div>

        <div className="space-y-4">
          {[5, 4, 3, 2, 1].map((stars) => {
            const score = restaurant[`reviews_per_score_${stars}`];
            const percentage = (score / restaurant.reviews) * 100;
            return (
              <div key={stars} className="flex items-center">
                <span className="w-12 text-sm">{stars} star</span>
                <Progress value={percentage} className="h-2 mx-4 flex-grow" />
                <span className="w-12 text-sm text-right">{score}</span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewsAndRatings;
