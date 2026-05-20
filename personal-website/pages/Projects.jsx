import NavBar from "../src/components/NavBar.jsx";

function Projects() {
  return (
    <section id="projects" style={{ height: "100vh" }}>
      <NavBar />
      <h1>Projects</h1>
      {/* // add project descriptions and links to github repos -- add css */}
      <section className="project-list">
        <h3>Blueberry Game</h3>
        <h3>Project 2</h3>
        <h3>Project 3</h3>
      </section>
    </section>
  );
}
export default Projects;
