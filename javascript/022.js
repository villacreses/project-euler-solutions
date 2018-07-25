const {readFile} = require('fs');
const {join} = require('path');

const filepath = join(__dirname, 'textfiles', '022.txt');

const nameValue = (name, listIndex) => {
  let total = 0;
  for (let i = 0; i < name.length; i++) {
    if (name[i] === '"') continue;
    total += name.charCodeAt(i) - 64;
  }
  return total * (listIndex + 1);
};

readFile(filepath, 'utf-8', (err, data) => {
  if (err) throw err;

  const values = data
    .split(',')
    .sort()
    .map(nameValue)
    .reduce((sum, num) => sum + num, 0);
  console.log(values);
});
