import React from "react";
import { useNavigate } from "react-router-dom";
import { useFlags, useFlagsmith } from "flagsmith/react";

function Navbar() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  };
  const flags = useFlags(["font_size", "maintainance", "theme"]);
  const font_size = flags.font_size.value;
  console.log(font_size);

  return (
    <nav style={navStyle}>
      <div style={navContentStyle}>
        <div
          style={{ ...brandStyle, fontSize: font_size ? font_size : "2rem" }}
          onClick={handleRedirect}
        >
          Adventurize
        </div>
      </div>
    </nav>
  );
}

const navStyle = {
  backgroundColor: "#007bff",
  padding: "10px 0",
};

const navContentStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
};

const brandStyle = {
  color: "#fff",
  cursor: "pointer",
};

export default Navbar;
