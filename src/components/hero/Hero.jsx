import hero from "../../assets/hero.webp";
import "./styles.scss";
import { FaGithub } from "react-icons/fa6";

const Hero = () => {
  return (
    <>
      <div id="heroSeparator" className="font1">
        <div id="heroL">
          <img src={hero} alt="" />
        </div>
        <div id="heroR">
          <div id="heroTxt">
            <h3>
              José <i>"Sunny"</i> Díaz
            </h3>
            <h2>
              Frontend Developer -{" "}
              <strong>HTML, CSS, JS, REACT, Wordpress</strong>
            </h2>
            <h4>Personalized Websites</h4>
          </div>
          <div id="heroBtn">
            <a href="https://github.com/SunnySparks" target="_blank">
              <div id="btnTxt">
                <h4>See More</h4>
                <FaGithub />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
