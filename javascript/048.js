const { addLong, power } = require('./helper/bigNum');


let total = 0;
for (let i = 1; i <= 1000; i++) {
  if (i % 50 === 0) console.log('Checked:', i);
  total = addLong(total, power(i, i));
  if (total.length > 10) total = total.slice(total.length - 10);
}

console.log(total);
