const { isPrime, isArmstrong, digitSum } = require("../utils/numberUtils");
const { getFunFact } = require("../services/funFactService");

async function classifyNumber(req, res) {
  // ... (input validation code remains the same)

  try {
    // ... (isPrime, isArmstrong, digitSum calls remain the same)

    let properties = []; // Initialize as an EMPTY ARRAY

    if (armstrong) {
      properties.push("armstrong");
    }

    if (num % 2 === 0) {
      properties.push("even");
    } else {
      properties.push("odd");
    }

    // ... (funFact code remains the same)

    res.json({
      number: num,
      is_prime: prime,
      is_perfect: false,
      properties: properties, // Make absolutely sure this is an array!
      digit_sum: sum,
      fun_fact: funFact,
    });
  } catch (error) {
    // ... (error handling remains the same)
  }
}

module.exports = {
  classifyNumber,
};