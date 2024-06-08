import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import ComingSoon from "@/components/comingsoon/ComingSoon";

const RooftopsPage = () => {
  return (
    <MainLayout title="Rooftops">
      <main className="bg-gray-100">
        <div className="container mx-auto text-center my-8">
          <h1
            className="text-4xl font-bold text-gray-800 my-4"
            data-aos="fade-down"
          >
            Rooftops
          </h1>
          <ComingSoon
            title="Rooftops Coming Soon"
            description="We're bringing you amazing rooftop experiences. Stay tuned!"
            notifyText="Notify Me About Rooftops"
          />
        </div>
      </main>
    </MainLayout>
  );
};

export default RooftopsPage;
