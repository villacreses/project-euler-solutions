const doomsday = year =>
  (2 + 5 * (year % 4) + 4 * (year % 100) + 6 * (year % 400)) % 7;

const isLeapYear = year =>
  ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);

const monthlyDoomsdays = year => [
  31 + Number(isLeapYear(year)),
  28 + Number(isLeapYear(year)),
  7, 4, 9, 6, 11, 8, 5, 10, 7, 12
];

const firstOfMonth = year => date => {
  let output = doomsday(year) - date + 1;
  while (output < 0) output += 7;
  return output;
};

let total = 0;
for (let y = 1901; y <= 2000; y++) {
  total += monthlyDoomsdays(y)
    .map(firstOfMonth(y))
    .filter(date => date === 0).length;
}
console.log(total);
console.log(doomsday(2018), monthlyDoomsdays(2018).map(firstOfMonth(2018)))
