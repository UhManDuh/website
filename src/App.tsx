import "./App.css";
import { useState, useEffect, useRef } from "react";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About";
import Card from "./components/Card/Card";
import {
  FaBars,
  FaGithub,
  FaGithubSquare,
  FaLinkedin,
  FaOctopusDeploy,
} from "react-icons/fa";
import "./components/Styles/style.css";
import Typewriter from "typewriter-effect";
import { IconContext } from "react-icons";

function App() {
  const [offSetY, setOffSetY] = useState(0);
  const handleScroll = () => setOffSetY(window.pageYOffset);
  const card = useRef(null);
  const home = useRef(null);
  const project = useRef(null);
  const about = useRef(null);
  const resume = useRef(null);
  const contact = useRef(null);
  const linkedInUrl = "https://www.linkedin.com/in/amanda-le-a33a63132/";
  const gitHubUrl = "https://github.com/mandyle08";

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (elementRef: any) => {
    window.scrollTo({ top: elementRef.current.offsetTop, behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* <NavBar /> */}
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="bx bx-menu">
            <FaBars />
          </i>
        </label>
        <ul>
          <li
            onClick={() => {
              scrollToTop();
            }}
            className="home"
          >
            <a> Home</a>
          </li>
          <li
            onClick={() => {
              scrollToSection(project);
            }}
            className="project"
          >
            <a>Projects</a>
          </li>
          <li
            onClick={() => {
              scrollToSection(about);
            }}
            className="about"
          >
            <a>About</a>
          </li>
          <li
            onClick={() => {
              scrollToSection(resume);
            }}
            className="resume"
          >
            <a>Resume</a>
          </li>
          <li
            onClick={() => {
              scrollToSection(contact);
            }}
            className="contact"
          >
            <a>Contact</a>
          </li>
        </ul>
      </nav>

      <section>
        <div className="night-sky"></div>
        <p
          className="child"
          // style={{ transform: `translateY(${offSetY * 0.45}px)` }}
        >
          Hi I'm Amanda
          <Typewriter
            options={{
              strings: [
                "and I code things.",
                "and I int on league of legends.",
                "and I play volleyball and soccer.",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 100,
            }}
          />
          <IconContext.Provider value={{ color: "grey" }}>
            <FaLinkedin
              className="icons"
              onClick={(e) => {
                e.preventDefault();
                window.open(linkedInUrl);
              }}
            />
            <FaGithubSquare
              className="icons"
              onClick={(e) => {
                e.preventDefault();
                window.open(gitHubUrl);
              }}
            />
            <FaOctopusDeploy className="icons" />
          </IconContext.Provider>
          {/* <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("and I code things.")
                .pauseFor(2500)
                .deleteAll()
                .start()
                .start();
            }}
          /> */}
        </p>
      </section>
      <div className="cardSection" ref={project}>
        <Card />
      </div>
      <div className="homeSection">
        <Home />
      </div>
      <div className="aboutSection" ref={about}>
        <About />
      </div>
    </>
  );
}

export default App;
