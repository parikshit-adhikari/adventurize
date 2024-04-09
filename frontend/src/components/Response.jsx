import React, { useState } from "react";

const Response = ({ response }) => {
  const { location, weather } = response;
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPlaces =
    selectedCategory === "All"
      ? response.places
      : response.places.filter((place) => place.category === selectedCategory);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "0.5rem" }}>
        Location: {location}
      </h2>
      <div style={dropdownContainerStyle}>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          style={dropdownStyle}
        >
          <option value="All">All</option>
          <option value="Historical and Cultural">
            Historical and Cultural
          </option>
          <option value="Nature and Adventure">Nature and Adventure</option>
          <option value="Entertainment and Shopping">
            Entertainment and Shopping
          </option>
        </select>
      </div>
      <div style={style}>
        <div style={weatherTableDiv}>
          <table style={tableStyle}>
            <tbody>
              <tr>
                <th style={headerCellStyle}>Temperature</th>
                <th style={headerCellStyle}>Feels Like</th>
                <th style={headerCellStyle}>Pressure</th>
              </tr>
              <tr>
                <td style={dataCellStyle}>{weather.temp}</td>
                <td style={dataCellStyle}>{weather.feels_like}</td>
                <td style={dataCellStyle}>{weather.pressure}</td>
              </tr>
              <tr>
                <th style={headerCellStyle}>Min Temperature</th>
                <th style={headerCellStyle}>Max Temperature</th>
                <th style={headerCellStyle}>Humidity</th>
              </tr>
              <tr>
                <td style={dataCellStyle}>{weather.temp_min}</td>
                <td style={dataCellStyle}>{weather.temp_max}</td>
                <td style={dataCellStyle}>{weather.humidity}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={placesTableDiv}>
          <table style={tableStylePlaces}>
            <tbody>
              <tr>
                <th style={cellStyle}>Name</th>
                <th style={cellStyle}>Description</th>
                <th style={cellStyle}>Category</th>
              </tr>
              {filteredPlaces.map((place, index) => (
                <tr key={index}>
                  <td style={dataCellStyle}>{place.name}</td>
                  <td style={dataCellStyle}>{place.description}</td>
                  <td style={dataCellStyle}>{place.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const style = {
  textAlign: "center",
  margin: "1rem",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  justifyContent: "center",
  alignItems: "center"
};
const tableStyle = {
  borderCollapse: "collapse",
  margin: "1rem auto",
  border: "1px solid black",
  width: "90%"
};
const tableStylePlaces = {
  borderCollapse: "collapse",
  margin: "1rem auto",
  border: "1px solid black",
  width: "90%"
};
const weatherTableDiv = {
  width: "80%",
};
const placesTableDiv = {
  width: "80%",
};
const cellStyle = {
  border: "1px solid #ddd",
  padding: "8px",
};

const dataCellStyle = {
  border: "1px solid #ddd",
  padding: "8px",
  textAlign: "center",
};
const dropdownStyle = {
  padding: "8px 12px",
  fontSize: "16px",
  border: "1px solid #ddd",
  borderRadius: "5px",
  backgroundColor: "#f9f9f9",
  color: "#333",
  appearance: "none",
  backgroundImage:
    'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23333" width="18px" height="18px"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>\')',
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 8px top 50%",
  paddingRight: "30px",
  cursor: "pointer",
  margin: "1rem auto",
  display: "block",
};

const dropdownContainerStyle = {
  marginBottom: "1rem",
};
const headerCellStyle = {
  border: "1px solid #ddd",
  padding: "8px",
  textAlign: "center",
  fontWeight: "bold",
};

export default Response;
