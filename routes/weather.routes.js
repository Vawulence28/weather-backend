const express = require("express");
const router = express.Router();

const {
  getCurrentWeather,
  getForecast
} = require("../services/weather.service");

router.get("/", getCurrentWeather);
router.get("/forecast", getForecast);

module.exports = router;
