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

  for (let i = 5; ; i += 6) {
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

function *primeSieve(limit) {
  if (!limit) throw new Error('Function "primeSieve" requires an upper bound');
  var sieve = [];

  sieve[1] = false;

  for (let k = 2; k <= limit; k += 1) {
    sieve[k] = true;
  }

  for (let k = 2; k * k <= limit; k += 1) {
    if (sieve[k] !== true) {
      continue;
    }

    for (let l = k * k; l <= limit; l += k) {
      sieve[l] = false;
    }
  }

  for (let i = 1; i < limit; i++) {
    if (sieve[i]) yield i;
  }
}


function factorization(num) {
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

function isPrime(num) {
  if (num % 2 === 0) return false;

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}

module.exports = {
  smallPrimes,
  factorization,
  isPrime,
  primeSieve,
};
