import React, { useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import Response from "./Response";
import { useFlags } from "flagsmith/react";
import Navbar from "./Navbar";
import ReactWave from "./ReactWave";
import HomeBanners from "./HomeBanners";
import Logo from "../../public/logo.png";

function Home() {
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const flags = useFlags(["maintainence", "theme"]);
  const isMaintenance = flags.maintainence.enabled;
  const isDark = flags.theme.enabled;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:3000/api/v1/userip?location=${location}&category=${category}`
      );
      setResponse(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  return (
    <div style={isDark ? homeDivDark : homeDivLight}>
      {isMaintenance ? (
        <h2 style={{ marginTop: "5rem", textAlign: "center" }}>
          Website is currently under maintainence.
        </h2>
      ) : (
        <div>
          <Navbar dark={isDark} />
          <form onSubmit={handleSubmit}>
            {!loading && response === null && (
              <>
                <img
                  src={Logo}
                  alt="logo"
                  style={{
                    width: "15rem",
                    margin: "auto",
                    display: "block",
                  }}
                />
                {!loading && (
                  <label style={locLabel}>
                    Please enter the location:
                    <br />
                    <input
                      type="text"
                      value={location}
                      style={locInput}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Location"
                    />
                  </label>
                )}

                {!loading && (
                  <button style={locSubmit} type="submit">
                    Submit
                  </button>
                )}
              </>
            )}
          </form>
          {!loading && response === null && (
            <>
              <div style={bannerDiv}>
                <HomeBanners
                  dark={isDark}
                  question={"What does the platform do?"}
                  description={
                    '"Adventurize" suggests personalized travel itineraries based on location, weather, and user preferences.'
                  }
                />
                <HomeBanners
                  question={"Who are the target users?"}
                  description={
                    "Travelers seeking curated adventure experiences aligned with their interests and the local climate."
                  }
                  dark={isDark}
                />
                <HomeBanners
                  question={"The reason behind building this project?"}
                  description={
                    "To streamline travel planning and provide tailored recommendations for memorable adventures worldwide."
                  }
                  dark={isDark}
                />
              </div>
            </>
          )}
          {loading && <Spinner size={60} style={"auto"} />}
          {response && <Response response={response} />}
          <ReactWave dark={isDark} />
        </div>
      )}
    </div>
  );
}
const homeDivDark = {
  backgroundColor: "#090f1a",
  height: "100vh",
  color: "#c7d4ca",
};
const homeDivLight = {
  height: "100vh",
};
const locLabel = {
  display: "flex",
  flexDirection: "column",
  width: "20%",
  margin: "1rem auto 2rem auto",
  fontSize: "1.5rem"
};
const locInput = {
  margin: "0.5rem 0",
  padding: "0.5rem",
};
const locSubmit = {
  display: "block",
  margin: "0 auto",
  padding: "0.75rem 1.5rem",
  backgroundColor: "#007bff",
  border: "none",
  borderRadius: "0.25rem",
  color: "white",
  fontWeight: 800,
  cursor: "pointer",
  fontSize: "1rem"
};
const bannerDiv = {
  display: "flex",
  width: "90%",
  margin: "3rem auto",
  gap: "1rem",
};

export default Home;
