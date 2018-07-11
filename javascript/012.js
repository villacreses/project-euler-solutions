const { factorization } = require('./helper/primes');

function *triangles() {
  for (let i = 1;; i++) {
    yield i * (i + 1) / 2;
  }
}

let target = 500;

let numDivs;
for (let t of triangles()) {
  const product = (prod, num) => prod * (num + 1);

  numDivs = Object.values(factorization(t)).reduce(product, 1);
  if (numDivs > target) {
    console.log(t);
    break;
  }
}
