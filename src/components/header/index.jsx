import React from "react";
import { ReactComponent as LogoIcon } from "../../images/logo.svg";
import { NavItem } from "../nav-item";

export const Header = () => {
  return (
    <header className="flex ">
      <LogoIcon />
      <nav className="flex ml-10 items-center">
        <NavItem text="Feature" />
        <NavItem text="Company" />
        <NavItem text="Careers" />
        <NavItem text="About" />
      </nav>
    </header>
  );
};
