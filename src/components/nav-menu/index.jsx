import React from "react";

export const NavMenu = ({ items = [] }) => {
  return (
    <div>
      {items.map((item) => (
        <span>{item}</span>
      ))}
    </div>
  );
};
