import { Outlet } from "react";
import NavBar from "./NavBar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
