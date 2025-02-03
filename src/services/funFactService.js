const axios = require("axios");

async function getFunFact(number) {
  try {
    const response = await axios.get(`http://numbersapi.com/${number}?json`);
    return response.data.text;
  } catch (error) {
    return "No fun fact available";
  }
}

module.exports = {
  getFunFact,
};
