import React from "react";

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

function NavBar() {
  return (
    <nav style={navStyle}>
      <a href="#home" style={linkStyle}>
        Home
      </a>
      <a href="#about" style={linkStyle}>
        About
      </a>
    </nav>
  );
}

export default NavBar;
