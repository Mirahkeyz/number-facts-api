const { isPrime, isArmstrong, digitSum } = require("../utils/numberUtils");
const { getFunFact } = require("../services/funFactService");

async function classifyNumber(req, res) {
  const { number } = req.query;
  
  // Stricter input validation
  if (number === undefined || number === null || number === "" || isNaN(Number(number))) {
    return res.status(400).json({
      number: number,
      error: "Invalid input. Please provide a valid number.",
    });
  }
  
  // Convert the input to a number
  const num = Number(number);
  
  try {
    // Perform all checks concurrently
    const [prime, armstrong, sum] = await Promise.all([
      isPrime(num),
      isArmstrong(num),
      digitSum(num),
    ]);
    
    // Prepare properties list with only allowed values
    const properties = [];
    
    // Only add armstrong if true
    if (armstrong) {
      properties.push("armstrong");
    }
    
    // Add odd or even
    properties.push(num % 2 === 0 ? "even" : "odd");
    
    // Fetch fun fact
    let funFact = null;
    try {
      funFact = await getFunFact(num);
    } catch (funFactError) {
      console.error("Error fetching fun fact:", funFactError);
      funFact = "Error fetching fun fact.";
    }
    
    // Return response
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