import React from "react";

function Header() {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          textTransform: "uppercase",
          letterSpacing: "0.25rem",
          padding: "1.5rem",
          backgroundColor: "#374151",
          color: "#E4E4E7",
        }}
      >
        Brewmate
      </h1>

      <p
        style={{
          backgroundColor: "#374151",
          color: "#E4E4E7",
          fontSize: "1.5rem",
        }}
      >
        Search for a beer to find what it pairs best with. Click on the beer to
        learn more!
      </p>
    </>
  );
}

export default Header;
