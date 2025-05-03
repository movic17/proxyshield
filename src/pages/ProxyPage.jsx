import React from "react";
import Footer from "../components/Footer/Footer";
import SecurityAndCompliance from "../components/SecurityAndCompliance/SecurityAndCompliance";
import Reviews from "../components/Reviews/Reviews";
import FAQ from "../components/FAQ/FAQ";
import Topbar from "../components/Topbar/Topbar";
import { useParams } from "react-router-dom";
import Specs from "../components/Specs/Specs";
import ProxyCountries from "../components/ProxyCountries/ProxyCountries";

function ProxyPage() {
  const { id } = useParams();

  return (
    <>
      <Topbar />
      <Specs />
      <ProxyCountries />
      <FAQ />
      <Reviews />
      <SecurityAndCompliance />
      <Footer />
    </>
  );
}

export default ProxyPage;
