// pages/index.js
import Link from "next/link";
import "../styles/globals.css";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Hero from "../components/home/Hero";
import About from "../components/home/AboutUs";
import FeaturedRestaurants from "../components/home/FeaturedRestaurants";
import Services from "@/components/home/Services";
import ContactForm from "@/components/home/ContactUs";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedRestaurants />
      <About />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  );
}
