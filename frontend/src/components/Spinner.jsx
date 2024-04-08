import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = ({ size, style }) => {
  return (
    <div style={{ width: "fit-content", margin: style, marginTop: "1rem" }}>
      <ClipLoader color="blue" size={size} />
    </div>
  );
};

export default Spinner;
