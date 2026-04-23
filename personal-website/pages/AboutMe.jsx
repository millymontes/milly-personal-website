import { Link } from "react-router-dom";
import NavBar from "../src/components/NavBar.jsx";

function AboutMe() {
  return (
    <section id="aboutme" style={{ height: "100vh" }}>
      <NavBar />
      <h1>About Me</h1>
      <p>
        {" "}
        I am certified in software engineering with passion for Front-end
        Development.{" "}
      </p>
    </section>
  );
}

export default AboutMe;
