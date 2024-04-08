import React from "react";

const Response = ({ response }) => {
    const { location, weather } = response;

    return (
      <div style={style}>
        <h2>Location: {location}</h2>
        <table style={tableStyle}>
          <tbody>
            <tr>
              <th style={cellStyle}>Temperature</th>
              <th style={cellStyle}>Feels Like</th>
              <th style={cellStyle}>Pressure</th>
            </tr>
            <tr>
              <td style={cellStyle}>{weather.temp}</td>
              <td style={cellStyle}>{weather.feels_like}</td>
              <td style={cellStyle}>{weather.pressure}</td>
            </tr>
            <tr>
              <th style={cellStyle}>Min Temperature</th>
              <th style={cellStyle}>Max Temperature</th>
              <th style={cellStyle}>Humidity</th>
            </tr>
            <tr>
              <td style={cellStyle}>{weather.temp_min}</td>
              <td style={cellStyle}>{weather.temp_max}</td>
              <td style={cellStyle}>{weather.humidity}</td>
            </tr>
          </tbody>
        </table>
        <h2>Places:</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={headerCellStyle}>Name</th>
              <th style={headerCellStyle}>Description</th>
              <th style={headerCellStyle}>Category</th>
            </tr>
          </thead>
          <tbody>
            {response.places.map((place, index) => (
              <tr key={index}>
                <td style={dataCellStyle}>{place.name}</td>
                <td style={dataCellStyle}>{place.description}</td>
                <td style={dataCellStyle}>{place.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}
const style = {
    textAlign: "center",
    margin: "1rem"
}
const tableStyle = {
    borderCollapse: "collapse",
    width: "50%",
    margin: "1rem auto",
    border: "1px solid black",
}
const cellStyle = {
  border: "1px solid #ddd", // Border width for internal borders increased
  padding: "8px",
};

const headerCellStyle = {
  border: "1px solid #ddd",
  padding: "8px",
  textAlign: "center",
  fontWeight: "bold",
};

const dataCellStyle = {
  border: "1px solid #ddd",
  padding: "8px",
  textAlign: "center",
};

export default Response;
