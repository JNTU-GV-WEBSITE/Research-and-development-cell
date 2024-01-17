import React from "react";
import "./ContactUs.css";

import { Paper, Typography } from "@mui/material";

function ContactUs() {
  return (
    <div className="contact-page">
      <h2>Contact Details:</h2>
      {/* College Section */}
      <div className="Contact-details">
        <Paper elevation={4} className="member">

        

    <div>
      <img 
        src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_1280.png"
        
        style={{ maxWidth: '10%', height: 'auto' }}
      />
    </div>

        <Typography variant="h6" >
        <strong>Dr. K. BABULU</strong>
          </Typography>
          <Typography variant="h6" >
            Director of Research & Development
          </Typography>
          <Typography variant="h6">
            JNTU-GV, Vizianagaram
          </Typography>
          <Typography variant="h6">
            Email: da@jntugv.edu.in
          </Typography>
        </Paper>
        
      </div>
    </div>
  );
}

export default ContactUs;
