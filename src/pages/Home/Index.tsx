import React from "react";
import "./Home.scss";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Goals from "../../components/Goals";

const Index = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Goals />
    </div>
  );
};

export default Index;
