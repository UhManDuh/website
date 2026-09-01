import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";
import { HERO_LINES, LINKS } from "../../constants";
import CyclingText from "../CyclingText";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="night-sky" />
      <div className="hero-copy">
        Hi I'm Amanda
        <CyclingText strings={HERO_LINES} />
        <IconContext.Provider value={{ color: "grey" }}>
          <div className="hero-links">
            <a
              href={LINKS.linkedIn}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="icons" />
            </a>
            <a
              href={LINKS.gitHub}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithubSquare className="icons" />
            </a>
          </div>
        </IconContext.Provider>
      </div>
    </section>
  );
}

export default Hero;
