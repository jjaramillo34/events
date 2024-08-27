import React from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import "../../styles/globals.css";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        {" "}
        {/* Adjust pt-20 as needed */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
