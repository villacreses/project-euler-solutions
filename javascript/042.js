const { readFile } = require('fs');
const { join } = require('path');

const filepath = join(__dirname, 'textfiles', '042.txt');

function *triangles (limit) {
  for (let i = 1; i * (i + 1) / 2 <= limit; i++) {
    yield i * (i + 1) * 0.5;
  }
}

const adder = (sum, num) => sum + num;
const charValue = ch => (ch === '"' ? 0 : ch.charCodeAt(0) - 64);
const wordValue = word => word.split('').map(charValue).reduce(adder);

readFile(filepath, 'utf8', (err, data) => {
  if (err) throw err;

  const values = data.split(',').map(wordValue);

  const triMap = {};
  for (let t of triangles(Math.max(...values))) {
    triMap[t] = true;
  }

  const total = values.filter(num => triMap[num]).length;
  console.log(total);
});
