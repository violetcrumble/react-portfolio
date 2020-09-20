import React from "react";

import { ProjectCard } from "./ProjectCard";

export default {
  title: "Project Card",
  component: ProjectCard,
  argTypes: {
    cardType: "simple",
    project: {
      title: "Clayton Homes Retail Responsive Prototype",
      description:
        "Proof of concept to demonstrate a responsive version of the Clayton Homes retailer sites.",
      category: "Design/Development",
      slug: "/clayton-homes-retail",
      isFeatured: true,
      imageUrl: "http://placekitten.com/200/300",
      cta: "Launch Prototype",
    },
  },
};

const Template = (args) => <ProjectCard {...args} />;

export const Detailed = Template.bind({});
Detailed.args = {
  cardType: "detailed",
  project: {
    title: "Clayton Homes Retail Responsive Prototype",
    description:
      "Proof of concept to demonstrate a responsive version of the Clayton Homes retailer sites.",
    category: "Design/Development",
    slug: "/clayton-homes-retail",
    isFeatured: true,
    imageUrl: "http://placekitten.com/200/300",
    cta: "Launch Prototype",
  },
};

export const Simple = Template.bind({});
Simple.args = {
  cardType: "simple",
  project: {
    title: "Clayton Homes Retail Responsive Prototype",
    description:
      "Proof of concept to demonstrate a responsive version of the Clayton Homes retailer sites.",
    category: "Design/Development",
    slug: "/clayton-homes-retail",
    isFeatured: true,
    imageUrl: "http://placekitten.com/200/300",
    cta: "Launch Prototype",
  },
};
