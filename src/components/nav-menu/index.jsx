import React from "react";

export const NavMenu = ({ items = [] }) => {
  return (
    <div className="flex flex-col px-4 py-2 bg-almost-white drop-shadow">
      {items.map(({text}) => (
        <span>{text}</span>
      ))}
    </div>
  );
};
