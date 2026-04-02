// import { NavLink } from "react-router-dom";
import "../App.css";

// export default function NavBar() {
//   return (
//     <header>
//       <nav>
//         <div className="navigation">
//           <NavLink to="/home">Home</NavLink>
//           {/* add a lil something that is a logo that goes to home page */}
//           <NavLink to="/aboutme">About Me</NavLink>
//           <NavLink to="/projects">Projects</NavLink>
//           <NavLink to="/contact">Contact Me</NavLink>
//         </div>
//       </nav>
//     </header>
//   );
// }

function NavBar() {
  return (
    <nav>
      <a href="#home">Home</a>
      <a href="#aboutme">About Me</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}

export default NavBar;
