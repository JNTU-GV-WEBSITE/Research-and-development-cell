 
import myImage from "./jntugvcev.jpg";
import ss from "./JntuGvUnit/SS.png";
import "./RDHeader.css";
import { Link, useNavigate } from "react-router-dom";
import ApartmentIcon from "@mui/icons-material/Apartment";
import DescriptionIcon from "@mui/icons-material/Description";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import SchoolIcon from "@mui/icons-material/School";
import DraftsIcon from "@mui/icons-material/Drafts";
const RDHeader = () => {
    const navigate = useNavigate();

    const [menuState, setMenuState] = useState(false);
  
    const homeHandler = () => {
      navigate("/");
    };
    const contactHandler = () => {
        navigate("/contact-us");
      };
  return (
    <div className="nav-bar">
      <div >
        <div className="container1" >
          <img src={myImage} alt="JNTUV_LOGO" className="logo" style={{marginLeft:0,paddingLeft:0,heigth:110,width:100}} />
          <img src={ss} alt="JNTUV_LOGO1" className="name" style={{width:500,marginLeft:0}}/>
           
    <nav className="top-nav">
      
      <div className="menu-icon" onClick={() => setMenuState(!menuState)}>
        <MenuIcon />
        MENU
      </div>
      <div className={menuState ? "menu-on-options" : "menu-off-options"}>
        <div class="dropdown">
          <div class="dropbtn" onClick={homeHandler}>
            <div className="drop-icon" onClick={() => setMenuState(!menuState)}>
              <h6><HomeIcon /> HOME</h6>
            </div>
          </div>
        </div>
        <div class="dropdown">
          <div class="dropbtn">
            <h6><ApartmentIcon /> ABOUT US</h6>
          </div>
          <div class="dropdown-content" onClick={() => setMenuState(!menuState)}>
            <button >
              {" "}
              <Link className="link-btn" to="/about-us/about-jntugv">
                About JNTU-GV
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/about-us/vision">
                Vision
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/about-us/mission">
                Mission
              </Link>
            </button>
          </div>
        </div>
        <div class="dropdown">
          <div class="dropbtn">
           <h6> <GroupsIcon /> ADMINISTRATION</h6>
          </div>
          <div class="dropdown-content" onClick={() => setMenuState(!menuState)}>
            <button>
              {" "}
              <Link
                className="link-btn"
                to="/administration/chancellor"
                target="_self"
              >
                Chancellor
              </Link>
            </button>
            <button>
              {" "}
              <Link
                className="link-btn"
                to="/administration/vice-chancellor"
                target="_self"
              >
                Vice Chancellor
              </Link>
            </button>
            <button>
              {" "}
              <Link
                className="link-btn"
                to="/administration/registrar"
                target="_self"
              >
                Registrar
              </Link>
            </button>
            <button>
              {" "}
              <Link
                className="link-btn"
                to="/administration/Director"
                target="_self"
              >
                Director
              </Link>
            </button>
            <button>
              {" "}
              <Link
                className="link-btn"
                to="/administration/BOSList"
                target="_self"
              >
                List of BOS's
              </Link>
            </button>
           
            <button>
              {" "}
              <Link
                className="link-btn"
                to="/administration/HODList"
                target="_self"
              >
                List of HOD's
              </Link>
            </button>
            <button>
              {" "}
              {/* <Link
                className="link-btn"
                to="/administration/chairpersons"
                target="_self"
              >
                Chairpersons
              </Link> */}
            </button>
          </div>
        </div>
        <div class="dropdown">
          <div class="dropbtn">
            <h6><SchoolIcon /> ACADEMICS</h6>
          </div>
          <div
            class="dropdown-content"
            onClick={() => setMenuState(!menuState)}
          >
            <button>
              {" "}
              <Link className="link-btn" to="/academics/programs-offered">
                Programs offered
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/academics/admissions">
                {" "}
                Admissions
              </Link>
            </button>

            <button>
              {" "}
              <Link className="link-btn" to="/academics/constituent-colleges">
                Constituent Colleges
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/academics/affliated-colleges">
                {" "}
                Affiliated Colleges
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/academics/bos-chairman">
                {" "}
                BOS Chairman
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/academics/calender">
                {" "}
                Academic Calender
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/academics/academic-syllabus">
                {" "}
                Academic Syllabus
              </Link>
            </button>
          </div>
        </div>
        <div class="dropdown">
          <div class="dropbtn">
           <h6> <DescriptionIcon /> EXAMINATIONS</h6>
          </div>
          <div
            class="dropdown-content"
            onClick={() => setMenuState(!menuState)}
          >
            <button>
              {" "}
              <Link className="link-btn" to="/examination/director-evaluation">
                Director of Evaluation
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/examination/controller">
                Controller of Examinations
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/examination/controller-sdc">
                Additional Controller of Examinations-SDC
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/examination/controller1">
                Additional Controller of Examinations-1
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/examination/controller2">
                Additional Controller of Examinations-2
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/examination/controller3">
                Additional Controller of Examinations-3
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/examination/controller-pg">
                Additional Controller of Examinations-PG
              </Link>
            </button>
            <button>
              {" "}
              <Link
                className="link-btn"
                to="https://results.jntugv.edu.in"
                target="_blank"
              >
                Examination Results
              </Link>
            </button>
          </div>
        </div>
        {/* 
        <div class="dropdown">
          <div class="dropbtn">
            <div className="drop-icon">
              <PiExamFill className="result-icon" />
              RESULTS
            </div>
          </div>
          <div class="dropdown-content">
            <button>
              {" "}
              <Link className="link-btn" to="/results/r13">
                R13
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/results/r16">
                R16{" "}
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/results/r19">
                R19{" "}
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/results/r20">
                R20{" "}
              </Link>
            </button>
          </div>
        </div> */}
        <div class="dropdown">
          <div className="dropbtn" onClick={contactHandler}>
            <div className="drop-icon" onClick={() => setMenuState(!menuState)}>
            <h6> <DraftsIcon /> CONTACT US</h6>
            </div>
          </div>
        </div>
      </div>
 </nav>
 </div>
 
</div>
      {/*  
      <div>
        <Dropdown />
    </div>*/}
    </div> 
  );
};
export default RDHeader;
