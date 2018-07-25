const {readFile} = require('fs');
const {join} = require('path');
const {addLong} = require('./helper/bigNum');

const filepath = join(__dirname, 'textfiles', '013.txt');

readFile(filepath, 'utf8', (err, data) => {
  if (err) throw err;
  const arr = data
    .split('\n')
    .filter(txt => txt !== '')
    .reduce(addLong, '0')
    .slice(0, 10);
  console.log(arr);
});
