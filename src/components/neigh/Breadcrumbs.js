"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Home, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const BreadcrumbItem = ({ href, icon: Icon, children, isLast }) => (
  <li className={cn("inline-flex items-center", !isLast && "mr-2")}>
    <Button
      variant="ghost"
      asChild
      className={cn(
        "h-auto p-2 text-sm hover:bg-gray-100",
        isLast && "font-semibold hover:bg-transparent"
      )}
    >
      <Link href={href} className="flex items-center">
        <Icon className="mr-2 h-4 w-4" />
        <span className="hidden sm:inline">{children}</span>
      </Link>
    </Button>
    {!isLast && <ChevronRight className="ml-2 h-4 w-4 text-gray-400" />}
  </li>
);

const NeighborhoodDetail = ({ neighborhood }) => {
  const breadcrumbs = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/neighborhoods", icon: MapPin, label: "Neighborhoods" },
    {
      href: `/neighborhood/${neighborhood.neighborhood_slug}`,
      icon: MapPin,
      label: neighborhood.name,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center space-x-2">
          {breadcrumbs.map((crumb, index) => (
            <BreadcrumbItem
              key={crumb.href}
              href={crumb.href}
              icon={crumb.icon}
              isLast={index === breadcrumbs.length - 1}
            >
              {crumb.label}
            </BreadcrumbItem>
          ))}
        </ol>
      </nav>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            {neighborhood.name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video relative mb-6">
            <Image
              src={neighborhood.image_url || "/placeholder-image.jpg"}
              alt={neighborhood.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <p className="text-lg text-gray-700">{neighborhood.description}</p>
        </CardContent>
      </Card>

      <Tabs defaultValue="overview" className="mb-8">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="restaurants">Restaurants</TabsTrigger>
          <TabsTrigger value="attractions">Attractions</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{neighborhood.overview}</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="restaurants">
          <Card>
            <CardHeader>
              <CardTitle>Restaurants</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Add restaurant list or grid here */}
              <p>List of restaurants in {neighborhood.name}</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="attractions">
          <Card>
            <CardHeader>
              <CardTitle>Attractions</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Add attractions list or grid here */}
              <p>List of attractions in {neighborhood.name}</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Add more sections as needed */}
    </div>
  );
};

export default NeighborhoodDetail;
