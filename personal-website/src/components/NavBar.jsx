// import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../App.css";

//toggle bar
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <button onClick={toggleMenu}>☰</button>
      {isOpen && (
        <div className="navigation">
          <a href="#home">Home</a>
          <a href="#aboutme">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
