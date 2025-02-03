function isPrime(num) {
  if (num <= 1 || !Number.isInteger(num)) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function isArmstrong(num) {
 if (!Number.isInteger(num) || num < 0) return false; // Handle negative numbers and non-integers
  const numStr = num.toString();
  const n = numStr.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    const digit = parseInt(numStr[i]);
    sum += Math.pow(digit, n);
  }
  return sum === num;
}


function digitSum(num) {
  if (!Number.isInteger(num)) return NaN; // Or throw an error, depending on your needs
  const numStr = Math.abs(num).toString(); //handle negative numbers
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