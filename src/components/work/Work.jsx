import sunshine from "../../assets/sunshine.webp";
import { FaArrowRight } from "react-icons/fa";
import "./styles.scss";

const Work = () => {
  return (
    <>
      <div id="workCont" className="font1">
        <div id="workTitle">
          <h2>My Work</h2>
        </div>
        <div id="workList">
          <div className="workCard">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
