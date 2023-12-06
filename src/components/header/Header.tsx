import React from "react";
import Navbar from "./Navbar";
import DarkModeToggle from "@/layout/ToggleDarkMode";
const Header = () => {
  return (
    <>
      <Navbar />
      <DarkModeToggle />
    </>
  );
};

export default Header;
