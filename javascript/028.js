const ringSum = layer => 4 * ((1 + 2 * layer) ** 2) - (layer * 12);

const gridSize = 1001;
let sum = 1;

for (let i = 1; i <= (gridSize - 1) / 2; i++) {
  sum += ringSum(i);
}

console.log(sum)
