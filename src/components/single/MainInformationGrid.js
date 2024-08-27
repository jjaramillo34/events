"use client";

import React from "react";
import { formatPhones } from "../../../helpers/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Utensils,
  Tags,
  Layers,
  Info,
  MapPin,
  Building,
  Phone,
  Mail,
} from "lucide-react";

const InfoItem = ({ icon: Icon, text }) => (
  <div className="flex items-center space-x-2 text-gray-700">
    <Icon className="h-5 w-5 text-teal-500" />
    <span>{text}</span>
  </div>
);

const MainInformationGrid = ({ restaurant }) => {
  const emails = [
    restaurant.email_1,
    restaurant.email_2,
    restaurant.email_3,
  ].filter(Boolean);

  let mailtoLink = "mailto:";
  let subject = `Inquiry about ${restaurant.name}`;
  if (emails.length > 0) {
    mailtoLink += emails[0];
    subject = encodeURIComponent(subject);
    if (emails.length > 1) {
      mailtoLink += "?cc=" + emails.slice(1).join(",");
      mailtoLink += "&subject=" + subject;
    } else {
      mailtoLink += "?subject=" + subject;
    }
  }

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-3xl font-semibold text-gray-800">
          Restaurant Information
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">
              General Information
            </h3>
            <InfoItem
              icon={Utensils}
              text={restaurant.name || "Zuma New York"}
            />
            <InfoItem
              icon={Tags}
              text={restaurant.type || "Japanese Restaurant"}
            />
            <InfoItem
              icon={Layers}
              text={restaurant.category || "Restaurants"}
            />
            <InfoItem
              icon={Info}
              text={
                restaurant.description ||
                "A stylish, modern Japanese restaurant."
              }
            />
            <InfoItem
              icon={MapPin}
              text={
                restaurant.full_address || "261 Madison Ave, New York, NY 10016"
              }
            />
            <InfoItem
              icon={Building}
              text={restaurant.located_in || "Manhattan"}
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">
              Contact Information
            </h3>
            <div className="space-y-2">
              {[restaurant.phone_1, restaurant.phone_2, restaurant.phone_3]
                .filter(Boolean)
                .map((phone, index) => (
                  <InfoItem
                    key={index}
                    icon={Phone}
                    text={formatPhones(phone)}
                  />
                ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">
            Email Contact
          </h3>
          <p className="text-gray-600">
            If you have any questions or need assistance, feel free to reach out
            via email.
          </p>
          {mailtoLink !== "mailto:" && (
            <Button asChild>
              <a href={mailtoLink} className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>Email Us</span>
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MainInformationGrid;
