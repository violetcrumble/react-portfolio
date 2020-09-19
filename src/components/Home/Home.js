import React from "react";
import { HomeStyles } from "./Home.styled";

export default function Home() {
  return (
    <HomeStyles>
      <h1>
        I'm Bonnie Mellott, an experienced designer and frontend developer.
      </h1>
      <p>I have worked in many areas including:</p>
      <ul>
        <li>
          <b>User Interface Design:</b> For websites, backend content management
          systems, etc.
        </li>
        <li>
          <b>Mobile Web Development:</b> Sites optimized for smart phones,
          tablets and other devices.
        </li>
        <li>
          <b>Responsive Web Design:</b> Sites that adapt to the computer or
          device on which they are displayed.
        </li>
      </ul>

      <div>
        Looking for a designer/developer? Learn more about me:
        <button>Drop me a note</button>
        <button>Check out my resume</button>
      </div>

      <div>Featured projects carousel (carousel of cards)</div>
    </HomeStyles>
  );
}
