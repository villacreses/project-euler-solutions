const { readFile } = require('fs');
const path = require('path')
const { linkedListNum } = require('./helper/bigSum');

const filepath = path.join(__dirname, 'textfiles', '013.txt');

readFile(filepath, 'utf8', (err, data) => {
  if (err) throw err;
  let sum = new linkedListNum();
  data.split('\n').forEach(str => sum.add(str));
  console.log(sum.print().slice(0, 10));
});
