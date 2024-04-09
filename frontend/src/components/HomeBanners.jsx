import React from "react";

const HomeBanners = ({ question, description, dark }) => {
  return (
    <div style={dark ? bannerDivDark : bannerDiv}>
      <h3>{question}</h3>
      <span>{description}</span>
    </div>
  );
};
const bannerDiv = {
  padding: "3rem 2rem",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
  background: "linear-gradient(to right, #f8b500, #ffda77, #ffffff)",
  borderRadius: "0.5rem",
};
const bannerDivDark = {
  padding: "3rem 2rem",
  boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
  background: "linear-gradient(to right, #212121, #424242)",
  borderRadius: "0.5rem",
};
export default HomeBanners;
