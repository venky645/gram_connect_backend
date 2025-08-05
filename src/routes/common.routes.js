const express = require('express');
const router = express.Router();
const commonController = require('../controllers/common.controller');

router.post("/weather",commonController.getWeatherUpdates)

exports.weatherRouter = router;