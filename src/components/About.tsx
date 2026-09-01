import "./Styles/style.css";
import Typewriter from "typewriter-effect";
import mangekyou from "../Assets/mangekyou.png";

function About() {
  return (
    <>
      <div className="About-app">
        <div className="StyledFontSize">
          My hobbies:{" "}
          <span style={{ color: "#3CAAAE", fontWeight: "bold" }}>
            <Typewriter
              options={{
                strings: ["Anime", "Video Games", "Food"],
                autoStart: true,
                loop: true,
                deleteSpeed: 100,
              }}
            />
          </span>
        </div>
        <div className="StyledSharingan">
          {/* <img src={mangekyou} className="App-logo" alt="logo" /> */}
        </div>
      </div>
    </>
  );
}

export default About;
