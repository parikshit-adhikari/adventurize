import React, { useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import Response from "./Response";
import { useFlags } from "flagsmith/react";

function Home() {
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [display, setDisplay] = useState(true);

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
    <div>
      <form onSubmit={handleSubmit}>
        {!loading && response === null && (
          <>
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
      {loading && <Spinner size={60} style={"auto"} />}
      {response && <Response response={response} />}
    </div>
  );
}
const locLabel = {
  display: "flex",
  flexDirection: "column",
  width: "20%",
  margin: "4rem auto 2rem auto",
};
const locInput = {
  margin: "0.5rem 0",
  padding: "0.5rem",
};
const locSubmit = {
  display: "block",
  margin: "0 auto",
  padding: "0.5rem 1rem",
  backgroundColor: "#007bff",
  border: "none",
  borderRadius: "0.25rem",
  color: "white",
  fontWeight: 800,
  cursor: "pointer",
};
export default Home;
