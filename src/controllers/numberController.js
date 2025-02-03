const { isPrime, isArmstrong, digitSum } = require("../utils/numberUtils");
const { getFunFact } = require("../services/funFactService");

async function classifyNumber(req, res) {
    const { number } = req.query;

    // Input validation – handles both undefined, NaN, and negative numbers
    if (!number || isNaN(number) || parseInt(number) < 0) {
        return res.status(400).json({
            number: number, // Include the original (invalid) input
            error: "Invalid number provided. Please provide a positive integer.",
        });
    }

    const num = parseInt(number); // Parse to integer only AFTER validation

    try {
        const [prime, armstrong, sum] = await Promise.all([
            isPrime(num),
            isArmstrong(num),
            digitSum(num),
        ]);

        const properties = [];
        if (armstrong) properties.push("armstrong");
        properties.push(num % 2 === 0 ? "even" : "odd");

        let funFact = null; // Initialize to null
        try {
            funFact = await getFunFact(num);
        } catch (funFactError) {
            console.error("Error fetching fun fact:", funFactError);
            funFact = "Error fetching fun fact."; // Or a more user-friendly message
        }

        res.json({  // 200 OK Response
            number: num,
            is_prime: prime,
            is_perfect: false,
            properties: properties,
            digit_sum: sum,
            fun_fact: funFact,
        });
    } catch (error) {
        console.error("Error classifying number:", error);
        res.status(500).json({ // 500 Internal Server Error
            number: num, // Include the number if possible
            error: "An error occurred. Please try again later.",
        });
    }
}

module.exports = {
    classifyNumber,
};