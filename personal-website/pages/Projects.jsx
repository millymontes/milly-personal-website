import NavBar from "../src/components/NavBar.jsx";

function Projects() {
  return (
    <section id="projects" style={{ height: "100vh" }}>
      <NavBar />
      <h1>Projects</h1>
      {/* // add project descriptions and links to github repos -- add css */}
      <section id="project-list">
        <h3 className="project-list1">Blueberry Game</h3>
        <h3 className="project-list2">Project 2</h3>
        <h3 className="project-list3">Project 3</h3>
      </section>
    </section>
  );
}
export default Projects;
