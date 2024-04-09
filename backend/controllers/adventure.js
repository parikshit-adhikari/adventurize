const axios = require("axios");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { response } = require("express");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const weather_api = process.env.WEATHER_API;

const user = async (req, res) => {
  let genairesponse;
  const { location, category } = req.query;
  try {
    const weatherResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${weather_api}`
    );

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(
      `Give me a list of fun activities near this 
      ${location}
      \n Please provide the response in json format formatted properly. There must be name, description(1 or 2 lines) and category (Historical and Cultural, Nature and Adventure, Entertainment and Shopping). Please provide only 3 places from each category. Hence only 9 total objects!`
    );
    genairesponse = await result.response.text();
    // console.log(genairesponse);

    const startIndex = genairesponse.indexOf("[");
    const endIndex = genairesponse.lastIndexOf("]");
    const trimmedResponse = genairesponse.substring(startIndex, endIndex + 1);

    const places = JSON.parse(trimmedResponse);

    res.status(200).json({
      message: "Success!",
      location: location,
      category: category,
      weather: weatherResponse.data.main,
      places: places,
    });
  } catch (error) {
    if (error.response && error.response.status === 404) {
      res.status(404).json({ message: "Location not found" });
    } else if (error.response && error.response.status === 401) {
      res.status(401).json({ message: "Unauthorized access to weather API" });
    } else {
      console.error("Error fetching weather data:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

module.exports = { user };
