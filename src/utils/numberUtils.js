// Function to check if a number is prime
function isPrime(num) {
  // Only check primality for positive integers > 1
  const intNum = Math.floor(Math.abs(num));
  if (intNum <= 1) return false;
  
  for (let i = 2; i <= Math.sqrt(intNum); i++) {
    if (intNum % i === 0) return false;
  }
  return true;
}

// Function to check if a number is Armstrong
function isArmstrong(num) {
  // Convert to absolute integer
  const intNum = Math.floor(Math.abs(num));
  const digits = intNum.toString().split("");
  
  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(Number(digit), digits.length),
    0
  );
  return sum === intNum;
}

// Function to calculate the sum of digits
function digitSum(num) {
  // Use absolute value and convert to string
  const absoluteNum = Math.abs(num);
  return absoluteNum
    .toString()
    .replace(".", "") // Remove decimal point for floating-point numbers
    .split("")
    .reduce((acc, digit) => acc + Number(digit), 0);
}

module.exports = {
  isPrime,
  isArmstrong,
  digitSum,
};