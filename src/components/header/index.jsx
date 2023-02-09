import React from "react";
import { ReactComponent as LogoIcon } from "../../images/logo.svg";
import { NavItem } from "../nav-item";
import { NavMenu } from "../nav-menu";
import { COMPANY, FEATURES } from "./constants";

export const Header = () => {
  return (
    <header className="flex ">
      <LogoIcon />
      <nav className="flex ml-10 items-center">
        <NavItem text="Feature" />
        <NavMenu item={FEATURES} />
        <NavItem text="Company" />
        <NavMenu item={COMPANY}/>
        <NavItem text="Careers" />
        <NavItem text="About" />
      </nav>
    </header>
  );
};
