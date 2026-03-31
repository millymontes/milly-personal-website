import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <header>
      <nav>
        <div className="navigation">
          <NavLink to="/aboutme">About Me</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact Me</NavLink>
        </div>
      </nav>
    </header>
  );
}
