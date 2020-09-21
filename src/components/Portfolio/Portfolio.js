import React from "react";
import { PortfolioStyles } from "./Portfolio.styled";

import { projectListing } from "../Shared/_projects";

import { ProjectCard } from "../Shared/ProjectCards/ProjectCard";

export default function Portfolio() {
  return (
    <PortfolioStyles>
      <h1>Design and Development Portfolio</h1>

      {projectListing &&
        projectListing.map((project) => (
          <ProjectCard project={project} cardType="detailed" />
        ))}
    </PortfolioStyles>
  );
}
