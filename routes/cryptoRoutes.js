const express = require('express');
const { getStats, getDeviation } = require('../controllers/cryptoController');
const router = express.Router();

// Route to get stats of cryptocurrency
router.get('/stats', getStats);

// Route to get standard deviation of cryptocurrency
router.get('/deviation', getDeviation);

module.exports = router;
