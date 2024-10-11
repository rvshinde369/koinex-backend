const CryptoData = require('../models/cryptoData');

// Fetch the latest data for the requested cryptocurrency
const getStats = async (req, res) => {
  const { coin_id } = req.query;

  try {
    const latestData = await CryptoData.findOne({ coin_id }).sort({ timestamp: -1 });
    if (!latestData) return res.status(404).json({ error: "Data not found" });

    res.json(latestData);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Calculate standard deviation for the last 100 price records
const getDeviation = async (req, res) => {
  const { coin_id } = req.query;

  try {
    const records = await CryptoData.find({ coin_id }).sort({ timestamp: -1 }).limit(100);
    const prices = records.map(record => record.current_price);

    const mean = prices.reduce((a, b) => a + b, 0) / prices.length;
    const variance = prices.reduce((acc, price) => acc + Math.pow(price - mean, 2), 0) / prices.length;
    const stdDeviation = Math.sqrt(variance).toFixed(2);

    res.json({ coin_id, std_deviation: stdDeviation });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { getStats, getDeviation };
