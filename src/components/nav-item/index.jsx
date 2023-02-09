import React from "react";
import {ReactComponents as ArrowDownIcon } from '../../images/ArrowDownIcon'

export const NavItem = ({ text = "afafafsd" }) => {
  return (
    <div className="relative">
      <div className="flex space-x-2 cursor-pointer">
        <span className="text-medium-gray hover:text-almost-black">{text}</span>
      </div>
    </div>
  );
};
