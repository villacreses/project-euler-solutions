const reverse = num => {
  let output = 0;

  while (num > 0) {
    output *= 10;
    output += num % 10;
    num = Math.floor(num / 10);
  }

  return output;
};

const isPalindrome = num => num === reverse(num);

let largest = 0;
for (let a = 999; a > 100; a--) {
  for (let b = a; b > 100 && a * b > largest; b--) {
    if (a % 11 && b % 11) continue;
    if (isPalindrome(a * b)) largest = a * b;
  }
}

console.log(largest);
