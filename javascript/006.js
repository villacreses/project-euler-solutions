// This is just a matter of knowing the relevant mathematical properties
const squareOfSum = n => (n * (n + 1) / 2) ** 2;
const sumOfSquares = n => n * (n + 1) * (2 * n + 1) / 6;

console.log(squareOfSum(100) - sumOfSquares(100));
