import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RDImageGallery.css";
import Image from "../../assets/R&D/Image.png";
import pic from "../../assets/R&D/pic.png";

const images = [
  Image,
  pic
];

function RDImageGallery() {
  return (
    <div className="mianDivIG">
      <div className="mainImageGallery">
        <Carousel fade>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img className="image" src={image} alt={`Slide ${index + 1}`} />
              <Carousel.Caption>
                <div className="carouselText">
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default RDImageGallery;
