import React from "react";

function About() {
  return (
    <section
      style={{
        background: "#fff",
        minHeight: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "48px 0 48px 0",
      }}
    >
      <h2
        style={{
          fontWeight: "bold",
          fontSize: "1.4rem",
          marginBottom: "12px",
          marginTop: 0,
          fontFamily: "serif",
        }}
      >
        About Me
      </h2>
      <p style={{ margin: 0, marginBottom: "16px" }}>I made this</p>
      <img
        src="https://i.imgur.com/mV8PQxj.gif"
        alt="I made this"
        style={{ width: "220px", height: "auto", display: "block" }}
      />
    </section>
  );
}

export default About;
