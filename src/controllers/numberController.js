const { isPrime, isArmstrong, digitSum } = require("../utils/numberUtils");
const { getFunFact } = require("../services/funFactService");

async function classifyNumber(req, res) {
  const { number } = req.query;

  // Check if the number is a valid number
  if (isNaN(number)) {
    return res.status(400).json({ number: req.query.number, error: true });
  }

  const num = parseInt(number);

  // Classification logic
  const prime = isPrime(num);
  const armstrong = isArmstrong(num);
  const properties = [];

  if (armstrong) properties.push("armstrong");
  properties.push(num % 2 === 0 ? "even" : "odd");

  const sum = digitSum(num);
  const funFact = await getFunFact(num);

  res.json({
    number: num,
    is_prime: prime,
    is_perfect: false, // Perfect number is not implemented here
    properties: properties,
    digit_sum: sum,
    fun_fact: funFact,
  });
}

module.exports = {
  classifyNumber,
};
