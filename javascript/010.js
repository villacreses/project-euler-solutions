const { smallPrimes } = require('./helper/primes');

const limit = 2000000;
let sum = 0;

for (let p of smallPrimes()) {
  if (p > limit) break;
  sum += p;
}

console.log(sum);
