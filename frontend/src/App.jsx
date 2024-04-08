import React from "react";
import Home from "./components/Home";
import flagsmith from "flagsmith";
import { FlagsmithProvider } from "flagsmith/react";

function App() {
  return (
    <FlagsmithProvider
      options={{ environmentID: "EKzQmuy6hA373pNwFrMA7X" }}
      flagsmith={flagsmith}
    >
      <Home />
    </FlagsmithProvider>
  );
}
export default App;
