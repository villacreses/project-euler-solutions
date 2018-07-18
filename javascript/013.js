const {readFile} = require('fs');
const {join} = require('path');
const {addLong} = require('./helper/bigNum');

const filepath = join(__dirname, 'textfiles', '013.txt');

readFile(filepath, 'utf8', (err, data) => {
  if (err) throw err;
  let arr = data.split('\n');
  arr = arr
    .slice(0, arr.length - 1)
    .reduce(addLong, '0')
    .slice(0, 10);
  console.log(arr);
});
