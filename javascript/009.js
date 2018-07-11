const sumABC = (m, n) => 2 * m * (m + n);
const productABC = (m, n, k) => (k ** 3) * (m*m - n*n) * (2*m*n) * (m*m + n*n);

let answer = null;
for (let m = 1; !answer; m++) {
  for (let n = 1; n < m; n++) {
    let sum = sumABC(m, n);
    if (1000 % sum === 0) {
      answer = productABC(m, n, 1000 / sum);
    }
  }
}

console.log(answer);
