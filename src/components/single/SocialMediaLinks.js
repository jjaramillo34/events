"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MessageCircle,
} from "lucide-react";

const SocialMediaLinks = ({ restaurant }) => {
  const socialMedia = [
    {
      platform: "facebook",
      icon: Facebook,
      color: "text-blue-600 hover:text-blue-800",
      bgColor: "bg-blue-100 hover:bg-blue-200",
    },
    {
      platform: "instagram",
      icon: Instagram,
      color: "text-pink-600 hover:text-pink-800",
      bgColor: "bg-pink-100 hover:bg-pink-200",
    },
    {
      platform: "twitter",
      icon: Twitter,
      color: "text-blue-400 hover:text-blue-600",
      bgColor: "bg-blue-50 hover:bg-blue-100",
    },
    {
      platform: "linkedin",
      icon: Linkedin,
      color: "text-blue-700 hover:text-blue-900",
      bgColor: "bg-blue-50 hover:bg-blue-100",
    },
    {
      platform: "whatsapp",
      icon: MessageCircle,
      color: "text-green-500 hover:text-green-700",
      bgColor: "bg-green-100 hover:bg-green-200",
    },
  ];

  const availableSocialMedia = socialMedia.filter(
    (media) => restaurant[media.platform]
  );

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center">
          Connect With {restaurant.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {availableSocialMedia.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-4">
            {availableSocialMedia.map((media) => (
              <Button
                key={media.platform}
                variant="outline"
                size="icon"
                className={`${media.bgColor} ${media.color}`}
                asChild
              >
                <a
                  href={restaurant[media.platform]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <media.icon className="h-5 w-5" />
                  <span className="sr-only">{media.platform}</span>
                </a>
              </Button>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No social media links available.
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default SocialMediaLinks;
