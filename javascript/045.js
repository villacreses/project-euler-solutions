// All hexagonal numbers are triangle numbers, but the converse is not true
// Thus only hexagonal and pentagonal numbers need to be calculated

const rootIsInt = h => Number.isInteger((1 + Math.sqrt(1 + 24 * h)) / 6);

for (let i = 1;; i++) {
  const h = 2 * i * i - i;

  if (h > 40755 && rootIsInt(h)) {
    console.log(h);
    break;
  }
}
