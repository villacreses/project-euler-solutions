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

module.exports = {
  smallPrimes
};
