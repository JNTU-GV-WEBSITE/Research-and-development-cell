import { Outlet } from "react-router-dom";
import "./Aboutus.css"; 
const AboutusMain = () => {
  

  return (
    <div className="ABOUT-Main">
      <div className="ABOUTallLeftMenu">
         {/* Navigation links for Chancellor, Vice Chancellor, and Registrar */}
         {/* <Link
          to="about-jntugv"
          className={`menuButton ${
            location.pathname === "/about-us/aboutR&DCell" ? "active" : ""
          }`}
        >
          About JNTUGV
        </Link> */}
        {/* <Link
          to="vision"
          className={`menuButton ${
            location.pathname === "/about-us/vision" ? "active" : ""
          }`}
        >
          Vision
        </Link>
        <Link
          to="mission"
          className={`menuButton ${
            location.pathname === "/about-us/mission" ? "active" : ""
          }`}
        >
          Mission
        </Link> */}
      </div>
      <Outlet />
    </div>
  );
};

export default AboutusMain;