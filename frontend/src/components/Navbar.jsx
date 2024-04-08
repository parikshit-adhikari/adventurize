import React from "react";
import { useFlags } from "flagsmith/react";

function Navbar({ dark }) {
  const handleRedirect = () => {
    window.location.reload();
  };
  const flags = useFlags(["navbar_font"]);
  const isEnabled = flags.navbar_font.enabled;
  const font_size = flags.navbar_font.value;
  console.log("navbarfont", font_size);

  return (
    <div style={dark ? navStyleDark : navStyle}>
      <div style={navContentStyle}>
        <div
          style={{ ...brandStyle, fontSize: isEnabled ? font_size : "1.5rem" }}
          onClick={handleRedirect}
        >
          Adventurize
        </div>
      </div>
    </div>
  );
}
const navStyleDark = {
  backgroundColor: "#0f1c30",
  padding: "10px 0",
};
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
