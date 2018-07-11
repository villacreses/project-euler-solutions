const sumEvenFib = limit => {
  let a = 1,
    b = 1,
    c = a + b,
    sum = 0;

  while (c < limit) {
    sum += c;
    a = b + c;
    b = a + c;
    c = a + b;
  }

  return sum;
};

console.log(sumEvenFib(4000000));
