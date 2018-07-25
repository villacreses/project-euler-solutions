const { addLong } = require('./helper/bigNum');

let [a, b] = ['0', '1']; // I like this notation
let temp;

let i;
for (i = 1; b.length < 1000; i++) {
  temp = b;
  b = addLong(b, a);
  a = temp;
}

console.log(i);
