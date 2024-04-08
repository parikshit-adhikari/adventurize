import React, { useState } from "react";
import axios from "axios";

function Home() {
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

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

        <button style={locSubmit} type="submit">Submit</button>
      </form>
      {loading && <p>Loading...</p>}
      {response && (
        <div>
          <h2>{response.message}</h2>
          <p>Location: {response.location}</p>
          <p>Category: {response.category}</p>
          <p>Weather:</p>
          <ul>
            {Object.entries(response.weather).map(([key, value]) => (
              <li key={key}>
                {key}: {value}
              </li>
            ))}
          </ul>
          <p>Places:</p>
          <ul>
            {response.places.map((place, index) => (
              <li key={index}>
                <h3>{place.name}</h3>
                <p>{place.description}</p>
                <p>Category: {place.category}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
const locLabel = {
  display: "flex",
  flexDirection: "column",
  width: "20%",
  margin: "4rem auto 2rem auto"
};
const locInput = {
  margin: "0.5rem 0",
  padding: "0.5rem",
}
const locSubmit = {
  display: "block", // Ensure the button takes full width
  margin: "0 auto", // Center the button horizontally
  padding: "0.5rem 1rem",
  backgroundColor: "#007bff",
  border: "none",
  borderRadius: "0.25rem",
  color: "white",
  fontWeight: 800,
  cursor: "pointer",
};
export default Home;
