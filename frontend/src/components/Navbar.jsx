import React from "react";
import { useFlags } from "flagsmith/react";

function Navbar() {
  const handleRedirect = () => {
    window.location.reload();
  };
  const flags = useFlags(["navbar_font"]);
  const font_size = flags.navbar_font.value;
  console.log("navbarfont", font_size);

  return (
    <div style={navStyle}>
      <div style={navContentStyle}>
        <div
          style={{ ...brandStyle, fontSize: font_size ? font_size : "1rem" }}
          onClick={handleRedirect}
        >
          Adventurize
        </div>
      </div>
    </div>
  );
}

const navStyle = {
  backgroundColor: "#007bff",
  padding: "10px 0",
};

const navContentStyle = {
  textAlign: "center",
};

const brandStyle = {
  color: "#fff",
  cursor: "pointer",
};

export default Navbar;
