import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <nav style={navStyle}>
      <div style={navContentStyle}>
        <div style={brandStyle} onClick={handleRedirect}>
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
  fontSize: "24px",
  cursor: "pointer",
};

export default Navbar;
