import React from "react";
import "./Home.scss";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Goals from "../../components/Goals";
import Investment from "../../components/Investment";
import Plan from "../../components/Plan";
import Ambassador from "../../components/Ambassador";
import Review from "../../components/Review";
import Features from "../../components/Features";
import Footer from "../../components/Footer";

const Index = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Goals />
      <Investment />
      <Plan />
      <Ambassador />
      <Review />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
