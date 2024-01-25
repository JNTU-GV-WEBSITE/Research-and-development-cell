import Dropdown from "./Dropdown";
import myImage from "./jntugvcev.jpg";

import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="logo-container">
          <img src={myImage} alt="JNTUV_LOGO" className="logo" />
          <h1 className="logo-text">
          Directorate Research & Development
            <br />
            <h6>JAWAHARLAL NEHRU TECHNOLOGICAL UNIVERSITY GURAJADA VIZIANAGARAM<br />
            </h6>
          </h1>
        </div>
      </div>
      <div>
        <Dropdown />
      </div>
    </div>
  );
};
export default Header;
