import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import AboutUs from "@/components/about/AboutUs";
import DevelopmentUpdates from "@/components/about/DevelopmentUpdates";
import DataResearchInsights from "@/components/about/DataResearchInsights";
import Dedication from "@/components/about/Dedication";

const AboutPage = () => {
  return (
    <MainLayout title="About">
      <main class="bg-gray-100">
        <AboutUs />
        <DevelopmentUpdates />
        <DataResearchInsights />
        <Dedication />
      </main>
    </MainLayout>
  );
};

export default AboutPage;
