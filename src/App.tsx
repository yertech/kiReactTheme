import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BannerColumn from "./components/BannerColumn";
import Selection from "./components/Selection";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <BannerColumn />
      <Selection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
