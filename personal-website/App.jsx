//important imports
import { useState } from "react";
import { Routes, Route } from "react-router";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Error404 from "./Error404";
import "./App.css";

// come back for export default app
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />} />
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
