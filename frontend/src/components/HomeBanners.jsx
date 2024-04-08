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
  backgroundColor: "#f0e9e9",
    borderRadius: "0.5rem",
  boxShadow: "1px 1px"
};
const bannerDivDark = {
  padding: "3rem 2rem",
  backgroundColor: "#101836",
  borderRadius: "0.5rem",
  boxShadow: "1px 1px",
};
export default HomeBanners;
