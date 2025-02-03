const { isPrime, isArmstrong, digitSum } = require("../utils/numberUtils");
const { getFunFact } = require("../services/funFactService");

async function classifyNumber(req, res) {
  const { number } = req.query;

  // Input validation – only reject non-numeric values
  if (!number || isNaN(number)) {
    return res.status(400).json({
      number: number,
      error: "Invalid input. Please provide a valid number.",
    });
  }

  const num = parseFloat(number); // Parse to float to handle floating-point values

  try {
    const [prime, armstrong, sum] = await Promise.all([
      isPrime(num),
      isArmstrong(num),
      digitSum(num),
    ]);

    const properties = [];
    if (armstrong) properties.push("armstrong");
    properties.push(num % 2 === 0 ? "even" : "odd");

    let funFact = null;
    try {
      funFact = await getFunFact(num);
    } catch (funFactError) {
      console.error("Error fetching fun fact:", funFactError);
      funFact = "Error fetching fun fact.";
    }

    res.json({
      number: num,
      is_prime: prime,
      is_perfect: false,
      properties: properties,
      digit_sum: sum,
      fun_fact: funFact,
    });
  } catch (error) {
    console.error("Error classifying number:", error);
    res.status(500).json({
      number: num,
      error: "An error occurred. Please try again later.",
    });
  }
}

module.exports = {
  classifyNumber,
};