"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Home,
  Mail,
  Phone,
  Coffee,
  DollarSign,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://www.facebook.com/javier.jaramillo3/",
      icon: Facebook,
      label: "Facebook",
    },
    {
      href: "https://twitter.com/jejaramilloc",
      icon: Twitter,
      label: "Twitter",
    },
    {
      href: "https://www.instagram.com/jjaramillo321/",
      icon: Instagram,
      label: "Instagram",
    },
    {
      href: "https://www.linkedin.com/in/javierjaramillo1/",
      icon: Linkedin,
      label: "LinkedIn",
    },
    { href: "https://github.com/jjaramillo34", icon: Github, label: "GitHub" },
  ];

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/restaurants", label: "Restaurants" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="relative bg-teal-800 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/img/ny.png"
          alt="New York City Skyline"
          layout="fill"
          objectFit="cover"
          className="opacity-10"
        />
      </div>
      <div className="relative container mx-auto px-4 py-12 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="col-span-1 md:col-span-2 lg:col-span-1 bg-teal-700/50 backdrop-blur-sm text-white border-none">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Restaurants Directory</h2>
              <p className="mb-4">
                Discover the best dining experiences in New York City. From cozy
                cafes to rooftop restaurants, we&apos;ve got you covered.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <Button
                    key={link.label}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="text-white hover:text-teal-200 hover:bg-teal-600/50"
                  >
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <link.icon className="h-5 w-5" />
                      <span className="sr-only">{link.label}</span>
                    </Link>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-teal-700/50 backdrop-blur-sm text-white border-none">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-teal-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-teal-700/50 backdrop-blur-sm text-white border-none">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <Home className="mr-2 h-4 w-4" />
                  368 9th Ave, New York, NY 10001
                </p>
                <p className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  <a
                    href="mailto:javier@jaramillohub.com"
                    className="hover:text-teal-200"
                  >
                    javier@jaramillohub.com
                  </a>
                </p>
                <p className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  +1 347 239 9026
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-8 bg-teal-600/50" />

        <div className="text-center space-y-4">
          <h3 className="text-xl font-semibold">Support Us</h3>
          <p>
            If you like our work, you can support us by buying us a coffee or
            donating.
          </p>
          <div className="space-x-4">
            <Button
              asChild
              variant="outline"
              className="bg-teal-600/50 text-white hover:bg-teal-500/50 border-teal-500"
            >
              <Link
                href="https://www.buymeacoffee.com/jjaramillo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Coffee className="mr-2 h-4 w-4" />
                Buy Me a Coffee
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-teal-600/50 text-white hover:bg-teal-500/50 border-teal-500"
            >
              <Link
                href="https://www.zeffy.com/en-US/embed/donation-form/b049bb8b-44c1-4adb-ae7e-9f816c4ca942?modal=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DollarSign className="mr-2 h-4 w-4" />
                Donate
              </Link>
            </Button>
          </div>
        </div>

        <Separator className="my-8 bg-teal-600/50" />

        <div className="text-center text-sm">
          <p>
            © 2024{" "}
            <Link href="/" className="hover:text-teal-200">
              Restaurants Directory
            </Link>
            . All rights reserved. Developed by{" "}
            <Link
              href="https://jaramillohub.com"
              target="_blank"
              className="hover:text-teal-200"
              rel="noopener noreferrer"
            >
              Javier Jaramillo
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
