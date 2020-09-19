import React from "react";
import { PortfolioStyles } from "./Portfolio.styled";

import { projectListing } from "../Shared/_projects";

export default function Portfolio() {
  return (
    <PortfolioStyles>
      <h1>Design and Development Portfolio</h1>

      {projectListing &&
        projectListing.map((project) => <div>{project.title}</div>)}
    </PortfolioStyles>
  );
}
