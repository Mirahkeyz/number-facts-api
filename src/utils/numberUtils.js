// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Function to check if a number is Armstrong
function isArmstrong(num) {
  const digits = num.toString().split("");
  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(Number(digit), digits.length),
    0
  );
  return sum === num;
}

// Function to calculate the sum of digits
function digitSum(num) {
  return num
    .toString()
    .split("")
    .reduce((acc, digit) => acc + Number(digit), 0);
}

module.exports = {
  isPrime,
  isArmstrong,
  digitSum,
};
