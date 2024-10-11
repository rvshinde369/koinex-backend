const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
  coin_id: { type: String, required: true },
  current_price: { type: Number, required: true },
  market_cap: { type: Number, required: true },
  change_24h: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('CryptoData', cryptoSchema);
