import React from "react";
import Typography from "@mui/material/Typography";



function VisionMission() {
  const vision = " To provide a sturdy platform to amplify value and versatile research aligned with the provisions of NEP-2020.";
  

  return (
    <div className="ABOUTmainContainer">
      {/* Blue box with organization structure heading */}
      <div className="AboutusBox">
        <Typography variant="h4" className="AboutusHeading">
          VISION / MISSION
        </Typography>
        {/* Add your organization structure content here */}
      </div>
      <div className="allRightContent">
     

        <div className="textContainer">
          {/* Information on the right side */}
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Vision
          </Typography>
          <Typography variant="body1">{vision}</Typography>
          <br />
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Mission
          </Typography>
          <Typography>
              <ul>
                <li>To create a healthy environment for enhanced research potency.</li>
                <li>To promote synergetic research.</li>
                <li>To support startup and entrepreneurship ventures through Centre for Innovation and Incubation.</li>
              </ul>
            </Typography>
          
        </div>
      </div>
    </div>
  );
}

export default VisionMission;