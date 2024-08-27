"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const NeighDetails = ({ neighborhood }) => {
  return (
    <div className="space-y-8">
      <Card className="bg-gradient-to-tr from-gray-100 to-gray-300">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-center text-gray-900">
            Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg text-gray-800 leading-relaxed">
            {neighborhood.summary}
          </p>
          <Tabs defaultValue="demographics">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="demographics">Demographics</TabsTrigger>
              <TabsTrigger value="places">Places</TabsTrigger>
            </TabsList>
            <TabsContent value="demographics">
              <p className="text-gray-800 mt-4">{neighborhood.demographics}</p>
            </TabsContent>
            <TabsContent value="places">
              <p className="text-gray-800 mt-4">{neighborhood.places}</p>
            </TabsContent>
          </Tabs>
          <div className="text-center">
            <Button asChild>
              <Link href="#restaurants">View Restaurants</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-gray-900">
            Transportation Options
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {neighborhood.transportation.subway_lines.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Subway Access
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {neighborhood.transportation.subway_lines.map((subwayLine) => (
                  <Badge
                    key={subwayLine}
                    variant="secondary"
                    className="text-lg p-4 flex items-center justify-center"
                  >
                    <Image
                      src={`/img/subway/${subwayLine}.png`}
                      alt={`Subway line ${subwayLine}`}
                      width={32}
                      height={32}
                      className="mr-2"
                    />
                    {subwayLine}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          {neighborhood.transportation.bus_lines.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Bus Routes
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4">
                {neighborhood.transportation.bus_lines.map((busRoute) => (
                  <Badge key={busRoute} variant="outline" className="text-lg">
                    {busRoute}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          {neighborhood.transportation.walkability && (
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Walkability
              </h3>
              <p className="text-gray-800">
                {neighborhood.transportation.walkability}
              </p>
            </div>
          )}
          {neighborhood.transportation.bike_paths && (
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Bike Paths
              </h3>
              <p className="text-gray-800">
                {neighborhood.transportation.bike_paths}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default NeighDetails;
