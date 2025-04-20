import hero from "../../assets/hero.webp";
import "./styles.scss";

const Hero = () => {
  return (
    <>
      <div id="heroSeparator">
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
        </div>
      </div>
    </>
  );
};

export default Hero;
