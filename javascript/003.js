const largestPrimeFactor = num => {
  let largest = 1;

  const factorOut = f => {
    if (num % f === 0) largest = f;
    while (num % f === 0) num /= f;
  };

  factorOut(2);
  for (let i = 3; i * i <= num; i += 2) {
    factorOut(i);
  }

  return (num > largest) ? num : largest;
};

console.log(largestPrimeFactor(600851475143));
