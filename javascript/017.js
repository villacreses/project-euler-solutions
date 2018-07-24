const ones = [0, 3, 3, 5, 4, 4, 3, 5, 5, 4];
const teens = [3, 6, 6, 8, 8, 7, 7, 9, 8, 8];
const tens = [0, 0, 6, 6, 5, 5, 5, 7, 6, 6];

let total = 0;

for (let i = 1; i < 1000; i++) {
  const [u, t, h] = [
    i % 10,
    Math.floor(i / 10) % 10,
    Math.floor(i / 100)
  ];

  if (h > 0) {
    total += ones[h] + 'hundred'.length;
    if (!(u === 0 && t === 0)) total += 3; // 'and'
  }

  total += (t === 1 ? teens[u] : tens[t] + ones[u]);
}

total += 'onethousand'.length;
console.log(total);
