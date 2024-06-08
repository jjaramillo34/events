import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import ComingSoon from "@/components/comingsoon/ComingSoon";

const SpotsPage = () => {
  return (
    <MainLayout title="Rooftops">
      <main className="bg-gray-100">
        <div className="container mx-auto text-center my-8">
          <ComingSoon
            title="Spots Coming Soon"
            description="We're bringing you amazing rooftop experiences. Stay tuned!"
            notifyText="Notify Me About Spots NYC"
          />
        </div>
      </main>
    </MainLayout>
  );
};

export default SpotsPage;
