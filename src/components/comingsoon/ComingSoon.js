"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { Separator } from "@/components/ui/separator";
import { FiCheckCircle, FiAlertCircle } from "react-icons/fi"; // Using react-icons

const ComingSoon = ({
  title = "Coming Soon",
  description = "We're working hard to bring you something amazing. Stay tuned!",
  notifyText = "Notify Me",
}) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleNotify = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate an async operation
    setTimeout(() => {
      toast({
        title: "Notification Set",
        description: "We'll notify you when we launch!",
        icon: <FiCheckCircle />,
        duration: 5000,
      });
      setEmail("");
      setIsLoading(false);
    }, 2000);
  };

  const handleBackHome = () => {
    router.push("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-500 via-teal-400 to-teal-300 p-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          whileHover={{ scale: 1.02, translateY: -5 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="w-full max-w-md shadow-xl border-0 bg-white">
            <CardHeader>
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <CardTitle className="text-4xl font-bold text-center text-teal-700">
                  {title}
                </CardTitle>
              </motion.div>
            </CardHeader>
            <CardContent>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg text-center text-gray-600 mb-6"
              >
                {description}
              </motion.p>
              <Separator className="my-4" />
              <form onSubmit={handleNotify} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="space-y-2"
                >
                  <Label htmlFor="email" className="text-teal-700 font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-teal-400 focus:border-teal-600"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          repeat: Infinity,
                          duration: 1,
                          ease: "linear",
                        }}
                      >
                        <FiAlertCircle className="inline-block mr-2" />
                        Submitting...
                      </motion.div>
                    ) : (
                      notifyText
                    )}
                  </Button>
                </motion.div>
              </form>
            </CardContent>
            <Separator className="my-4" />
            <CardFooter className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Button
                  variant="outline"
                  onClick={handleBackHome}
                  className="border-teal-600 text-teal-600 hover:bg-teal-100"
                >
                  Go Back Home
                </Button>
              </motion.div>
            </CardFooter>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
