import React from "react";

function Home() {
  return (
    <main
      style={{
        background: "#fcf6dd",
        minHeight: "350px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 0 48px 0",
      }}
    >
      <h1
        style={{
          color: "#a11a1a",
          fontWeight: "bold",
          fontSize: "2rem",
          textAlign: "center",
          margin: 0,
          fontFamily: "serif",
        }}
      >
        Liza is a Web Developer from<br />New York
      </h1>
    </main>
  );
}

export default Home;
