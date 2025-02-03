const { isPrime, isArmstrong, digitSum } = require("../utils/numberUtils");
const { getFunFact } = require("../services/funFactService");

async function classifyNumber(req, res) {
  const { number } = req.query;

  // Input validation – reject truly invalid inputs
  if (number === undefined || number === null || number === "") {
    return res.status(400).json({
      number: number,
      error: "Invalid input. Please provide a valid number.",
    });
  }

  // Convert the input to a number
  const num = parseFloat(number);

  // Check if the conversion resulted in NaN or if it's not an integer
  if (isNaN(num) || !Number.isInteger(num)) {
    return res.status(400).json({
      number: number,
      error: "Invalid input. Please provide a valid integer.",
    });
  }

  try {
    const [prime, armstrong, sum] = await Promise.all([
      isPrime(num),
      isArmstrong(num),
      digitSum(num),
    ]);

    // Initialize properties as an empty array
    const properties = [];

    // Add "armstrong" if the number is an Armstrong number
    if (armstrong) {
      properties.push("armstrong");
    }

    // Add "even" or "odd" based on the number's parity
    if (num % 2 === 0) {
      properties.push("even");
    } else {
      properties.push("odd");
    }

    // Log the properties for debugging
    console.log(`Number: ${num}, Properties: ${properties}`);

    // Ensure only valid properties are included in the response
    const validProperties = ["armstrong", "even", "odd"];
    const filteredProperties = properties.filter(property => validProperties.includes(property));

    // Log filtered properties for debugging
    console.log(`Filtered Properties: ${filteredProperties}`);

    // Fetch fun fact
    let funFact = null;
    try {
      funFact = await getFunFact(num);
    } catch (funFactError) {
      console.error("Error fetching fun fact:", funFactError);
      funFact = "Error fetching fun fact.";
    }

    // Send the response
    res.json({
      number: num,
      is_prime: prime,
      is_perfect: false,
      properties: filteredProperties, // Only contains "armstrong", "odd", or "even"
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
