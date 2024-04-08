import React from "react";
import Wave from "react-wavify";

const ReactWave = ({dark}) => (
  <div style={dark? waveDark : waveLight}>
    <Wave
      fill="#007bff"
      paused={false}
      style={{ display: "flex" }}
      options={{
        height: 10,
        amplitude: 40,
        speed: 0.15,
      }}
    />
  </div>
);
const waveDark = {
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  zIndex: 1,
};
const waveLight = {
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  zIndex: -1,
};
export default ReactWave;