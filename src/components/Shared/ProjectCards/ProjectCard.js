import React from "react";
import PropTypes from "prop-types";
import { ProjectCardStyles } from "./ProjectCard.styled";

export const ProjectCard = ({ cardType, project }) => (
  <ProjectCardStyles>
    <img src={project.imageUrl} alt={project.title} />
    {cardType === "detailed" && <h3>{project.category}</h3>}
    <h2>{project.title}</h2>
    {cardType === "detailed" && (
      <>
        <p>{project.description}</p>
        <a href={project.slug}>
          {project.cta !== null ? project.cta : "Learn More"}
        </a>
      </>
    )}
  </ProjectCardStyles>
);

//todo: add shape to proptypes
ProjectCard.propTypes = {
  // cardType: PropTypes.oneOf[("simple", "detailed")],
  project: PropTypes.object.isRequired,
};
