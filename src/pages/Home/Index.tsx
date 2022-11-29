import React from "react";
import "./Home.scss";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Goals from "../../components/Goals";
import Investment from "../../components/Investment";
import Plan from "../../components/Plan";

const Index = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Goals />
      <Investment />
      <Plan />
    </div>
  );
};

export default Index;
