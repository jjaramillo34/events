"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getBaseUrl } from "../../../helpers/getBaseUrl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

const Neighborhoods = () => {
  const [neighborhoods, setNeighborhoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNeighborhoods = async () => {
      try {
        const baseurl = getBaseUrl();
        const response = await fetch(`${baseurl}/api/neighborhoods`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setNeighborhoods(data.cities);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNeighborhoods();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto py-8 space-y-4">
        {[...Array(3)].map((_, index) => (
          <Card key={index}>
            <CardHeader>
              <Skeleton className="h-8 w-3/4" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full mb-4" />
              <div className="flex flex-wrap gap-2">
                {[...Array(8)].map((_, i) => (
                  <Skeleton key={i} className="h-8 w-24 rounded-full" />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-8">
        <Alert variant="destructive">
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-b from-teal-50 to-teal-100 py-12">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-teal-800 text-center mb-8">
            Explore Neighborhoods
          </h1>
        </motion.div>
        {neighborhoods.map((city, cityIndex) => (
          <motion.div
            key={city.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: cityIndex * 0.1 }}
          >
            <Card className="mb-8 border-teal-200 shadow-lg">
              <CardHeader className="bg-teal-50">
                <CardTitle className="text-3xl font-bold text-teal-800">
                  {city.name}{" "}
                  <span className="text-lg text-teal-600">
                    ({city.neighborhoods.length} neighborhoods)
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="bg-white">
                <p className="text-teal-700 mb-4">
                  Explore what each neighborhood in {city.name} has to offer,
                  from dining to nightlife.
                </p>
                <div className="flex flex-wrap gap-3">
                  {city.neighborhoods.map((neighborhood) => (
                    <Button
                      key={neighborhood.slug}
                      variant="outline"
                      asChild
                      className="rounded-full bg-teal-50 text-teal-700 border-teal-300 hover:bg-teal-100 hover:text-teal-800 transition-colors duration-300"
                    >
                      <Link href={`/neighborhood/${neighborhood.slug}`}>
                        {neighborhood.name}
                      </Link>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Neighborhoods;
