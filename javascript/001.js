const sumUpTo = n => n * (n + 1) / 2;
const sumMultiples = n => n * sumUpTo(Math.floor((limit - 1) / n));

const limit = 1000;
console.log(sumMultiples(3) + sumMultiples(5) - sumMultiples(15));
