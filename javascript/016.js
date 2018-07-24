const { power, addLong } = require('./helper/bigNum');

const product = power(2, 1000);
let output = '0';

for (let i = 0; i < product.length; i++) {
  output = addLong(output, product[i]);
}

console.log(output);
