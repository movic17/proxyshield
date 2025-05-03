import React from "react";
import Topbar from "../components/Topbar/Topbar";
import CTA from "../components/CTA/CTA";
import Features from "../components/Features/Features";
import Reviews from "../components/Reviews/Reviews";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import SecurityAndCompliance from "../components/SecurityAndCompliance/SecurityAndCompliance";
import Countries from "../components/Countries/Countries";

function Home() {
  return (
    <>
      <Topbar />
      <CTA />
      <Features />
      <Countries />
      <FAQ />
      <Reviews />
      <SecurityAndCompliance />
      <Footer />
    </>
  );
}

export default Home;
