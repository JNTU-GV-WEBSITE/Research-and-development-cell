import React from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Gallery from "./components/Gallery/Gallery";
// import Map from "./components/MainPage/Map/Map";
import Scrollbar from "./components/NewsAndEvents/Scrollbar";
import UpdatePanel from "./components/UpdatePanel/UpdatePanel";
import Footer from "./components/MainPage/Footer/Footer";
import "./Homepage.css";
function Homepage() {
  return (
    <div>
      <ImageGallery />
      <div className="newsNUpdates">
        <Scrollbar className="update-panel"/>
        <UpdatePanel className="update-panel"/>
      </div>
      <Gallery />
      <br />
      {/* <Map /> */}
      <Footer />
    </div>
  );
}

export default Homepage;
