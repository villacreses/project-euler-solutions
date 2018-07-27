// Since there is such a small finite number of factorials to calculate,
// I'll use this map to reduce time complexity
const fact = {
  0: 1, 1: 1, 2: 2, 3: 6, 4: 24, 5: 120, 6: 720, 7: 5040, 8: 40320, 9: 362880
};

const sumDigitFact = inputNum =>
  (inputNum + '')
    .split('')
    .map(digit => fact[digit])
    .reduce((sum, num) => sum + num);

const limit = 100000000;
let total = 0;
for (let i = 3; i <= limit; i++) {
  if (i === sumDigitFact(i)) total += i;
  if (i % 1000000 === 0) console.log('Checked:', i);
}

console.log(total);
