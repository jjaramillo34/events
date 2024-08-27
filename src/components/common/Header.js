"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const ListItem = React.forwardRef(
    ({ className, title, href, children, ...props }, ref) => {
      return (
        <li>
          <NavigationMenuLink asChild>
            <Link
              ref={ref}
              href={href}
              className={cn(
                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                className
              )}
              {...props}
            >
              <div className="text-sm font-medium leading-none uppercase">
                {title}
              </div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            </Link>
          </NavigationMenuLink>
        </li>
      );
    }
  );
  ListItem.displayName = "ListItem";

  const menuItems = ["Home", "About", "Events", "Contact"];

  const ModalMenu = () => (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
      onClick={() => setIsMenuOpen(false)}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="bg-white rounded-lg p-8 w-11/12 max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end mb-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="block text-xl font-semibold text-gray-800 hover:text-teal-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed w-full z-40"
    >
      <nav className="bg-teal-800 bg-opacity-90 backdrop-blur-md p-4 text-white shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Restaurants Directory
          </Link>
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              {menuItems.map((item) => (
                <NavigationMenuItem key={item}>
                  {item === "Events" ? (
                    <>
                      <NavigationMenuTrigger className="uppercase text-white">
                        {item}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          <ListItem
                            href="/restaurants/neighborhoods"
                            title="Neighborhoods"
                          >
                            Explore restaurants by neighborhood
                          </ListItem>
                          <ListItem href="/restaurants/spots" title="Spots">
                            Discover unique dining spots
                          </ListItem>
                          <ListItem
                            href="/restaurants/rooftops"
                            title="Rooftops"
                          >
                            Find the best rooftop dining experiences
                          </ListItem>
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      legacyBehavior
                      passHref
                    >
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "uppercase text-white"
                        )}
                      >
                        {item}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>
      <AnimatePresence>{isMenuOpen && <ModalMenu />}</AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
