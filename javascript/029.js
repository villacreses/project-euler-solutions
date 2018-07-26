const { power, multLong } = require('./helper/bigNum');

const terms = limit => {
  let unique = new Set();
  for (let a = 2; a <= limit; a++) {
    for (let b = 2; b <= limit; b++) {
      unique.add(power(a, b));
    }
  }

  return unique.size;
};

console.log(terms(100));
