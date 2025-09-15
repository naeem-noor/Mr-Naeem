import React from "react";
import "./works.css";
import projectData from "../../data/projectData";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        I take pride in paying attention to the smallest details and making sure
        that my work is pixel perfect. I am excited to bring my skills and
        experience to help businesses achieve their goals and create a strong
        online presence.
      </span>
      <div className="worksImgs">
        {projectData.map((project) => (
          <div className="worksItem" key={project.id}>
            <a href={project.link} target="_blank" rel="noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="worksImg"
              />
              <div className="overlay">
                <p className="overlayText">{project.title}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
      {/* <button className="workBtn">See More</button> */}
    </section>
  );
};

export default Works;
