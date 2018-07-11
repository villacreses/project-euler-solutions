function longestCollatzUnder (limit = 20) {
  let memo = {};
  let max = 1;

  for (let i = 1; i <= limit; i++) {
    collatz(i, memo);
    if (memo[i] > memo[max]) max = i;
  }
  return max;
}


function collatz (num, memo = {}) {
  if (num === 1) {
    memo[num] = 1;
  } else if (!memo[num]) {
    const nextCollatz = (num % 2 === 0) ? (num / 2) : (3 * num + 1);
    memo[num] = 1 + collatz(nextCollatz, memo);
  }
  return memo[num];
}

console.log(longestCollatzUnder(1000000));
