const sumABC = (m, n) => 2 * m * (m + n);
const productABC = (m, n, k) => (k ** 3) * (m*m - n*n) * (2*m*n) * (m*m + n*n);

let answer = null;
// I only do this because an answer is guaranteed, otherwise I'd be a LOT more
// careful with the break condition
for (let m = 1; !answer; m++) { 
  for (let n = 1; n < m; n++) {
    let sum = sumABC(m, n);
    if (1000 % sum === 0) {
      answer = productABC(m, n, 1000 / sum);
      break;
    }
  }
}

console.log(answer);
