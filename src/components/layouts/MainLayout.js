import React from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import "../../styles/globals.css";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
