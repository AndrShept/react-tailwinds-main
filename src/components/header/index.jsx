import React from "react";
import { ReactComponent as LogoIcon } from "../../images/logo.svg";
import { NavItem } from "../nav-item";
import { NavMenu } from "../nav-menu";
import { COMPANY, FEATURES } from "./constants";

export const Header = () => {
  return (
    <header className="flex ">
      <LogoIcon />
      <nav className="flex ml-10 space-x-5 items-center">
        <NavItem text="Feature">
          <NavMenu items={FEATURES} />
        </NavItem>
        <NavItem text="Company">
          <NavMenu items={COMPANY} />
        </NavItem>

        <NavItem text="Careers" />
        <NavItem text="About" />
      </nav>
    </header>
  );
};
