// Needs a helper function to handle large products!
function totalLatticePaths (num) {
  let product = 1;
  for (let i = 1; i <= num; i++) {
    product *= (num + i) / i;
  }
  return product;
}

console.log(totalLatticePaths(20));
