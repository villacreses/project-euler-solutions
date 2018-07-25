const fact = num => (num < 2 ? 1 : num * fact(num - 1));
let count = 0;
const target = 1000000;

const findPerm = (perm = '', present = {}) => {
  if (perm.length === 10) {
    if (++count === target) console.log(perm);
    return;
  }

  for (let i = 0; i < 10; i++) {
    if (present[i]) continue;
    findPerm(perm + i, {...present, [i]: true});
    if (count === target) break;
  }
};

findPerm();
