import { Link } from "react-router-dom";
import NavBar from "../src/components/NavBar.jsx";

function AboutMe() {
  return (
    <section id="aboutme" style={{ height: "100vh" }}>
      <NavBar />
      <h1>About Me</h1>
      <p>
        {" "}
        I am a recent graduate of Fullstack Academy, the software engineering
        bootcamp. Before my certificate course I was working as a banker at
        FirstBank, now PNC. I was taking courses at my community college for
        graphic design when I signed up for an HTML and CSS class and I was
        hooked. I tried doing Coursera to learn Front-End but ended up finding
        the Fullstack Academy program. Later I transferred to First Bank's
        headquarters and got to shadow and learn about the industry from their
        development team. I was even lucky enough to be part of their Women In
        Tech Mentorship program where I got to learn a lot from different tech
        fields. I am now looking for a role in Front-end where I can explore my
        creativity, work with a team and become better equipped with coding in
        general.{" "}
      </p>
    </section>
  );
}

//add logos for fullstack academy, html, css, javascript, react

export default AboutMe;
