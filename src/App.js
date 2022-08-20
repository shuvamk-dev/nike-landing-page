import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/header";
import MainFold from "./components/MainFold";
import OverlayImage from "./components/OverlayImage";

const App = () => {
  return (
    <div className="app">
      <Header />
      <MainFold />
      <OverlayImage />
      <Footer />
    </div>
  );
};

export default App;
