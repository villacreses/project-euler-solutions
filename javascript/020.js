const { addLong, fact } = require('./helper/bigNum');

let product = fact(100);
let sum = 0;

for (let i = 0; i < product.length; i++) {
  sum = addLong(sum, product[i]);
}
