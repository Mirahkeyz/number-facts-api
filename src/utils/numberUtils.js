// Function to check if a number is prime
function isPrime(num) {
  // Reject non-integers and numbers <= 1
  if (num <= 1 || !Number.isInteger(num)) return false;
  
  // Check for primality
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Function to check if a number is Armstrong
function isArmstrong(num) {
  // Reject non-integers
  if (!Number.isInteger(num)) return false;
  
  const digits = num.toString().split("");
  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(Number(digit), digits.length),
    0
  );
  return sum === num;
}

// Function to calculate the sum of digits
function digitSum(num) {
  // Convert number to its absolute value and remove any decimal point
  const absoluteNum = Math.abs(num);
  const sum = absoluteNum
    .toString()
    .replace(".", "") // Remove decimal point for floating-point numbers
    .split("")
    .reduce((acc, digit) => acc + Number(digit), 0);
  return sum;
}

module.exports = {
  isPrime,
  isArmstrong,
  digitSum,
};