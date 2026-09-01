import { CSSProperties } from "react";
import bulbasaur from "../../Assets/bulbasaur.png";
import charmander from "../../Assets/charmander.png";
import squirtle from "../../Assets/squirtle.png";
import "./Projects.css";

type ProjectCard = {
  category: string;
  heading: string;
  image: string;
  bgSize: string;
  bgColor: string;
};

const PROJECTS: ProjectCard[] = [
  {
    category: "testing card",
    heading: "card header",
    image: bulbasaur,
    bgSize: "420px",
    bgColor: "green",
  },
  {
    category: "testing card",
    heading: "card header",
    image: squirtle,
    bgSize: "200px",
    bgColor: "white",
  },
  {
    category: "testing card",
    heading: "card header",
    image: charmander,
    bgSize: "130px",
    bgColor: "#ffb35c",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="card-container">
        {PROJECTS.map((project) => (
          <article key={project.image} className="card">
            <div
              className="card-background"
              style={
                {
                  "--bg-image": `url(${project.image})`,
                  "--bg-size": project.bgSize,
                  "--bg-color": project.bgColor,
                } as CSSProperties
              }
            />
            <div className="card-content">
              <div className="card-category">{project.category}</div>
              <h3 className="card-heading">{project.heading}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
