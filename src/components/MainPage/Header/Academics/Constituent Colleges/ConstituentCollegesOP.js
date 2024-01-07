import "./ConstituentCollegesOP.css";

const ConstituentCollegesOP = () => {
  return (
      <div className="allRightContentAOP">
        <div className="clgheaddiv">Constituent Colleges</div>
        <br></br>
          <div className="clgdiv">
            <a
              className="clgnamediv"
              href="https://jntugvcev.edu.in/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="clgtextdivOP">JNTU-GV College of Engineering, Vizianagaram</div>
            </a>
            <a
               className="clgnamediv"
               href="http://jntugvk.ucev.in/"
               target="_blank"
               rel="noreferrer"
            >
              <div className="clgtextdivOP">JNTU-GV Tribal College of Engineering, Kurupam</div>
            </a>
          </div>
      </div>
  );
};

export default ConstituentCollegesOP;
