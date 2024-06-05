import React from "react";
import Link from "next/link";
import MainLayout from "@/components/layouts/MainLayout";
import e from "express";

const TypesPage = () => {
  return (
    <MainLayout title="Types">
      <div className="container mx-auto text-center my-8">
        <h2 className="text-4xl font-bold text-gray-800 my-4">Types</h2>
        <p className="text-gray-600">
          Types are different categories of restaurants. Click on any type to
          explore more.
        </p>
      </div>
    </MainLayout>
  );
};

export default TypesPage;
