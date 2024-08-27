"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BreadcrumbItem = ({ href, children, isLast }) => (
  <li className="flex items-center">
    <Button
      variant={isLast ? "secondary" : "default"}
      size="sm"
      asChild
      className={cn(
        "rounded-full text-xs md:text-sm",
        isLast && "pointer-events-none opacity-70"
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
    {!isLast && <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />}
  </li>
);

const Breadcrumbs = ({ restaurant }) => {
  const truncateName = (name, length) => {
    return name.length > length ? `${name.slice(0, length)}...` : name;
  };

  const breadcrumbs = [
    { href: "/", label: "Home", icon: Home },
    { href: "/restaurants/1", label: "Events", icon: Calendar },
    { href: "#", label: restaurant.name },
  ];

  return (
    <div className="bg-white py-4">
      <div className="container mx-auto px-4">
        <div
          className="flex items-center space-x-4 rounded-lg bg-gray-100 p-2 shadow-sm"
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center space-x-2 flex-wrap">
            {breadcrumbs.map((crumb, index) => (
              <BreadcrumbItem
                key={crumb.href}
                href={crumb.href}
                isLast={index === breadcrumbs.length - 1}
              >
                {crumb.icon && <crumb.icon className="h-4 w-4 mr-1" />}
                <span className="hidden md:inline">{crumb.label}</span>
                <span className="md:hidden">
                  {index === breadcrumbs.length - 1
                    ? truncateName(crumb.label, 12)
                    : crumb.icon
                    ? ""
                    : crumb.label.charAt(0)}
                </span>
              </BreadcrumbItem>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
