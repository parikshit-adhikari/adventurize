import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import flagsmith from "flagsmith";
import { FlagsmithProvider } from "flagsmith/react";

function App() {
  return (
    <FlagsmithProvider
      options={{ environmentID: "EKzQmuy6hA373pNwFrMA7X" }}
      flagsmith={flagsmith}
    >
      <div className="app-main-div">
        <Router>
          <div>
            <Navbar />
          </div>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </Router>
      </div>
    </FlagsmithProvider>
  );
}

export default App;
