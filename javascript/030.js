const { addLong, power } = require('./helper/bigNum');

const exp = num => power(num, 5);
const limit = 1000000;
let total = 0;

for (let i = 2; i < limit; i++) {
  if (i % 100000 === 0) console.log('checked:', i);
  let sum = Number((i + '').split('').map(exp).reduce(addLong, 0));
  if (sum === i) total = addLong(total, sum);
}

console.log(total);
