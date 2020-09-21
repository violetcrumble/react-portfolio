import React from "react";
import { FeaturedProjectsCarouselStyles } from "./FeaturedProjectsCarousel.styled";

import { projectListing } from "../../Shared/_projects";

import { ProjectCard } from "../../Shared/ProjectCards/ProjectCard";

export const FeaturedProjectsCarousel = () => (
  <FeaturedProjectsCarouselStyles>
    <p>Featured Projects Carousel</p>
    {projectListing &&
      projectListing
        .filter((project) => project.isFeatured)
        .map((project) => (
          <ProjectCard project={project} cardType="detailed" />
        ))}
  </FeaturedProjectsCarouselStyles>
);
