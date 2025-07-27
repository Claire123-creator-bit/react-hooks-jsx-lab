import React from "react";
import { NavLink } from "react-router-dom";

const navStyle = {
  display: "flex",
  flexDirection: "row",
  gap: "32px",
  background: "#fcf6dd",
  padding: "16px 0 0 0",
  justifyContent: "flex-start",
  alignItems: "flex-start",
};

const linkStyle = {
  textDecoration: "none",
  color: "#a11a1a",
  fontSize: "18px",
  paddingBottom: "4px",
  border: "none",
  background: "none",
  outline: "none",
  fontFamily: "inherit",
  fontWeight: "normal",
  marginLeft: "12px",
  marginRight: "12px",
  position: "relative",
};

const activeLinkStyle = {
  borderBottom: "2px solid #a11a1a",
};

function NavBar() {
  return (
    <nav style={navStyle}>
      <NavLink
        to="/"
        end
        style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeLinkStyle : {}) })}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeLinkStyle : {}) })}
      >
        About
      </NavLink>
    </nav>
  );
}

export default NavBar;
