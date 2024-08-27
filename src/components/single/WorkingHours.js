"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

const WorkingHours = ({ restaurant }) => {
  const workingHours = JSON.parse(restaurant.working_hours);

  if (!workingHours) {
    return null;
  }

  const daysOrder = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center flex items-center justify-center">
          <Clock className="mr-2" />
          Working Hours
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {daysOrder.map((day) => (
            <Card key={day} className="overflow-hidden">
              <CardHeader className="bg-gray-100 py-2">
                <CardTitle className="text-lg font-semibold">{day}</CardTitle>
              </CardHeader>
              <CardContent className="py-4">
                {workingHours[day] === "Closed" ? (
                  <Badge variant="destructive">Closed</Badge>
                ) : (
                  <span className="text-gray-600">{workingHours[day]}</span>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkingHours;
