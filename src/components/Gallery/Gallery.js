// Gallery.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';
import Image from "../../assets/R&D/Image.png";
import pic from "../../assets/R&D/pic.png";
import pic1 from "../../assets/R&D/pic1.png";

const Gallery = () => {
 
  const images = [
    Image,
    pic,
    pic1,
    // Add more image URLs as needed
  ];


  return (
    <div className="gallery-container">
      <h1>GALLERY</h1>
      <div className={`image-scroll`}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>
      
    </div>
  );
};

export default Gallery;
