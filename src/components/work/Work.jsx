import sunshine from "../../assets/sunshine.webp";
import dash from "../../assets/dashboard.webp";
import { FaArrowRight } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import "./styles.scss";

const Work = () => {
  return (
    <>
      <div id="workCont" className="font1">
        <div id="workTitle">
          <h2>My Work</h2>
        </div>
        <div id="workList">
          <a
            className="workCard"
            href="https://sunnysparks.github.io/Sunshine_University/"
            target="_blank"
          >
            <div className="cardImg">
              <img src={sunshine} alt="Sunshine University" />
            </div>
            <div className="cardTxt">
              <div className="cardTitle">
                <h2>Sunshine University</h2>
                <FaArrowRight />
              </div>
              <div className="cardWording">
                <p>React project showcasing a university webpage</p>
              </div>
              <div className="cardFooter">
                <p>
                  <i>Created by: Sunny Diaz</i>
                </p>
                <FaReact />
                <FaSass />
              </div>
            </div>
          </a>
          <a
            className="workCard"
            href="https://sunnysparks.github.io/My-dash/"
            target="_blank"
          >
            <div className="cardImg">
              <img src={dash} alt="My Dashboard" />
            </div>
            <div className="cardTxt">
              <div className="cardTitle">
                <h2>My Dashboard</h2>
                <FaArrowRight />
              </div>
              <div className="cardWording">
                <p>Web app inspired in macOS' dashboard</p>
              </div>
              <div className="cardFooter">
                <p>
                  <i>Created by: Sunny Diaz</i>
                </p>
                <FaReact />
                <FaSass />
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Work;
