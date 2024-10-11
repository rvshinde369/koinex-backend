const cron = require('node-cron');
const { getCryptoData } = require('./coinGeckoService');
const CryptoData = require('../models/cryptoData');

// Schedule the job to run every 2 hours
cron.schedule('0 */2 * * *', async () => {
  try {
    const data = await getCryptoData();
    
    const records = data.map(coin => ({
      coin_id: coin.id,
      current_price: coin.current_price,
      market_cap: coin.market_cap,
      change_24h: coin.price_change_percentage_24h,
    }));
    
    await CryptoData.insertMany(records);
    console.log("Data saved to the database.");
  } catch (error) {
    console.error("Error in cron job:", error);
  }
});
