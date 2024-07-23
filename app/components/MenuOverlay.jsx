import React from "react";
import NavLink from './NavLink';

const MenuOverlay = ({ links }) => {
  return (
    <>
      {links.map((link, index) => (
        <NavLink key={index} href={link.href} title={link.title} />
      ))}
    </>
  );
};

export default MenuOverlay;