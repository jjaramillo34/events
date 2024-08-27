"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Clock } from "lucide-react";

const OtherHours = ({ restaurant }) => {
  const otherHours = restaurant.other_hours
    ? JSON.parse(restaurant.other_hours)
    : null;

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center flex items-center justify-center">
          <Clock className="mr-2" />
          Other Working Hours
        </CardTitle>
      </CardHeader>
      <CardContent>
        {otherHours ? (
          otherHours.map((hoursGroup, index) => (
            <div key={index} className="mb-6">
              {Object.entries(hoursGroup).map(([meal, times], mealIndex) => (
                <React.Fragment key={meal}>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    {meal.toUpperCase()} Hours
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                    {Object.entries(times).map(([day, time]) => (
                      <Card key={day} className="bg-gray-50">
                        <CardHeader className="py-2 px-4">
                          <CardTitle className="text-lg">{day}</CardTitle>
                        </CardHeader>
                        <CardContent className="py-2 px-4">
                          {time === "Closed" ? (
                            <Badge variant="destructive">Closed</Badge>
                          ) : (
                            <span className="text-gray-600">{time}</span>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  {mealIndex < Object.entries(hoursGroup).length - 1 && (
                    <Separator className="my-6" />
                  )}
                </React.Fragment>
              ))}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No additional working hours available.
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default OtherHours;
