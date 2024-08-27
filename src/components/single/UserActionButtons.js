"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Mail } from "lucide-react";

const UserActionButtons = () => {
  return (
    <Card className="mt-8">
      <CardContent className="flex flex-col sm:flex-row justify-center items-center gap-4 p-6">
        <Button variant="outline" asChild>
          <Link href="/restaurants" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Restaurants
          </Link>
        </Button>
        <Button asChild>
          <Link href="/contact" className="flex items-center">
            <Mail className="mr-2 h-4 w-4" />
            Contact Us
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default UserActionButtons;
