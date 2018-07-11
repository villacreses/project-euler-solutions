const sumUpTo = n => n * (n + 1) / 2;
const sumMultiples = n => n * sumUpTo(Math.floor((1000 - 1) / n));

console.log(sumMultiples(3) + sumMultiples(5) - sumMultiples(15));
