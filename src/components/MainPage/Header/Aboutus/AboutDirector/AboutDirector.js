

import React from "react";
import Typography from "@mui/material/Typography";
import "../Aboutus.css";

function AboutDirector() {
  return (
    <div className="ABOUTmainContainer">
      <div className="allRightContent">
        <div className="allRightContentHeading"><right><h2>About JNTUGV</h2></right></div>

        <div className="allRightContentProfile">
          <div className="imageContainer">
            {/* Image on the left side */}
            <img
              src="assets/img/Director-Research-and-Development.jpg" class="wow fadeInUp" width="180px"
              alt="JNTUGV director"
              className="imageLeft"
              style={{ float: "right", maxWidth: "300px", margin: "0 0 20px 20px" }}
              
            />
          </div>

          <div className="textContainer">

            {/* Profile description */}
            <Typography>
            The R & D cell functions with the following motto To encourage multidisciplinary collaborative research among faculty members and with research institutes across the globe. To facilitate cutting edge research in thrust areas identified by the departments. To organize scientific outreach programmes periodically in order to address research gaps through knowledge management. To promote industry-oriented research in diverse fields so as to integrate the outcome with real-world applications.
              <Typography>
              Dr. V. Ravindra Director, Research and Development Jawaharlal Nehru Technological University Kakinada Kakinada-533003. East Godavari District, A.P. India. Email: ravindra.vipparthy@gmail.com
              </Typography>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutJNTUGV;
