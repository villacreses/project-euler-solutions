const { smallPrimes } = require('./helper/primes');

let p = {},
  limit = 20;

for(let prime of smallPrimes()) {
  if (prime > limit) break;
  p[prime] = Math.floor(Math.log(limit) / Math.log(prime));
}

let output = Object.keys(p)
  .map(Number)
  .map(num => num ** p[num])
  .reduce((product, num) => product * num);

console.log(output);
