const axios = require('axios');

const getCryptoData = async () => {
  const coins = ['bitcoin', 'matic-network', 'ethereum'];
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coins.join(',')}`;
  
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data from CoinGecko:", error);
    throw error;
  }
};

module.exports = { getCryptoData };
