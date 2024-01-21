import React from "react";

import "./App.css";
import RDImageGallery from "./components/RDImageGallery/RDImageGallery";
import Gallery from "./components/Gallery/Gallery";
// import Map from "./components/MainPage/Map/Map";

import LatestNews from "./components/LatestNews/LatestNews";
import Footer from "./components/MainPage/Footer/Footer";
import "./Homepage.css";
function Homepage() {
  return (
    <div>
      <RDImageGallery />
      
        <LatestNews />
      <Gallery />
      <br />
      {/* <Map /> */}
      <Footer />
    </div>
  );
}

export default Homepage;
