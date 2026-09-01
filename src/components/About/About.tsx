import { HOBBIES } from "../../constants";
import CyclingText from "../CyclingText";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-heading">
        My hobbies:{" "}
        <span className="about-hobbies">
          <CyclingText strings={HOBBIES} />
        </span>
      </div>
    </section>
  );
}

export default About;
