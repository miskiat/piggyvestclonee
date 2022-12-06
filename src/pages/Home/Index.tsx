import React from "react";
import "./Home.scss";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Goals from "../../components/Goals";
import Investment from "../../components/Investment";
import Plan from "../../components/Plan";
import Ambassador from "../../components/Ambassador";
import Review from "../../components/Review";

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
    </div>
  );
};

export default Index;
