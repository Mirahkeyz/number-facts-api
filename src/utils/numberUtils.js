// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1 || !Number.isInteger(num)) return false; // Reject non-integers and numbers <= 1
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Function to check if a number is Armstrong
function isArmstrong(num) {
  if (!Number.isInteger(num) || num < 0) return false; // Reject non-integers and negative numbers
  const numStr = num.toString();
  const n = numStr.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    const digit = parseInt(numStr[i]);
    sum += Math.pow(digit, n);
  }
  return sum === num;
}

// Function to calculate the sum of digits
function digitSum(num) {
  if (!Number.isInteger(num)) return NaN; // Reject non-integers
  const numStr = Math.abs(num).toString(); // Handle negative numbers
  let sum = 0;
  for (let i = 0; i < numStr.length; i++) {
    const digit = parseInt(numStr[i]);
    sum += digit;
  }
  return sum;
}

module.exports = {
  isPrime,
  isArmstrong,
  digitSum,
};
