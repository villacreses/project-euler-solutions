function d (baseNum) {
  let output = [1];

  for(let i = 2; i * i <= baseNum; i++) {
    if(baseNum % i === 0) {
      output.push(i);
      if (baseNum / i !== i) output.push(baseNum / i);
    }
  }

  return output.reduce((sum, num) => sum + num);
}

function amicableUnder (limit) {
  let map = {};
  for (let i = 2; i < limit; i++) {
    map[i] = d(i);
  }

  let amicable = [];
  Object.keys(map).map(Number).forEach(num => {
    if (num === map[map[num]] && num !== map[num]) amicable.push(num);
  });

  return amicable.reduce((sum, num) => sum + num);
}

console.log(amicableUnder(10000));
