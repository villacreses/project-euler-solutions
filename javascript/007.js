const { smallPrimes } = require('./helper/primes');

let count = 0;

for (let p of smallPrimes()) {
  if (++count === 10001) {
    console.log(p);
    break;
  }
}
