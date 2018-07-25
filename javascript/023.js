function d (baseNum) {
  let output = 1;

  for (let i = 2; i * i <= baseNum; i++) {
    if (baseNum % i === 0) {
      output += i;
      if (baseNum / i !== i) output += (baseNum / i);
    }
  }
  return output > baseNum;
}

const limit = 28123;
let total = 0;

let abundant = [];
let sumOfAbundants = {}
let sum;

for (let i = 12; i < limit; i++) {
  if (d(i)) abundant.push(i);
}

abundant.forEach((num, i) => {
  for (let j = i; j < abundant.length; j++) {
    sum = abundant[i] + abundant[j];
    if (sum < limit) sumOfAbundants[sum] = true;
  }
});

for (let i = 1; i < limit; i++) {
  if (!sumOfAbundants[i]) total += i;
}

console.log(total);
