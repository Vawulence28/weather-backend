const axios = require("axios");

const BASE_URL = "https://api.openweathermap.org/data/2.5";

exports.getCurrentWeather = async (req, res) => {
  try {
    const { city, unit = "metric" } = req.query;

    if (!city) {
      return res.status(400).json({ error: "City is required" });
    }

    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        units: unit,
        appid: process.env.WEATHER_API_KEY
      }
    });

    res.json(response.data);
  } catch (error) {
    res.status(404).json({
      error: "Unable to fetch weather data"
    });
  }
};

exports.getForecast = async (req, res) => {
  try {
    const { city, unit = "metric" } = req.query;

    if (!city) {
      return res.status(400).json({ error: "City is required" });
    }

    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        q: city,
        units: unit,
        appid: process.env.WEATHER_API_KEY
      }
    });

    res.json(response.data);
  } catch (error) {
    res.status(404).json({
      error: "Unable to fetch forecast data"
    });
  }
};
