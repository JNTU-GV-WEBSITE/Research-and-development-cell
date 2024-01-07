import React from "react";
import "../Aboutus.css";
import Typography from "@mui/material/Typography";

function Vision() {
  return (
    <div className="ABOUTmainContainer">
      <div className="allRightContent">
        <div className="allRightContentHeading">Vision</div>

        <div className="allRightContentProfile">
          {/* Profile information */}
          <center></center>
          <hr />
          {/* Profile description */}
          <p className="a"></p>
          <Typography>
            ❖ To emerge as a premier technical Institution in the field of
            engineering and research with a focus to produce professionally
            competent and socially sensitive engineers capable of working in a
            multidisciplinary global environment.
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Vision;
