// Generally fast for all primes under 10,000.  Decent speed up to 1,000,000.
function *smallPrimes() {
  yield 2;
  yield 3;

  let p = [2, 3];
  const isPrime = num => {
    for (let i = 0; i < p.length && p[i] * p[i] <= num; i++) {
      if (num % p[i] === 0) return false;
    }
    return true;
  };

  for (let i = 5;; i += 6) {
    if (isPrime(i)) {
      p.push(i);
      yield i;
    }
    if (isPrime(i + 2)) {
      p.push(i + 2);
      yield i + 2;
    }
  }
}

function factorization (num) {
  if (num === 1) return {1: 1};
  let p = {};

  const factorOut = factor => {
    let exp = 0;
    while (num % factor === 0) {
      num /= factor;
      exp++;
    }
    if (exp > 0) p[factor] = exp;
  };

  factorOut(2);
  for (let i = 3; i * i < num; i += 2) {
    factorOut(i);
  }
  if (num > 1) factorOut(num);
  return p;
}

module.exports = {
  smallPrimes,
  factorization
};

