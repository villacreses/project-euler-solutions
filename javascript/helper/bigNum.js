function Digit (DigitStr) {
  this.value = Number(DigitStr);
  this.next = null;
}

const LinkedListNum = (numString) => {
  let node = new Digit(numString[numString.length - 1]);
  const head = node;

  for (let i = numString.length - 2; i >= 0; i--) {
    node.next = new Digit(numString[i]);
    node = node.next;
  }

  return head;
};

const addListNums = (l1, l2) => {
  let sum, head, node;
  let carry = 0;

  while (l1 || l2 || carry) {
    let a = l1 ? l1.value : 0;
    let b = l2 ? l2.value : 0;

    sum = a + b + carry;
    carry = Math.floor(sum / 10);

    if (!node) {
      node = new Digit(sum % 10);
      head = node;
    } else {
      node.next = new Digit(sum % 10);
      node = node.next;
    }

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return head;
};


const multListNums = (l1, l2) => {
  let [n1, n2] = [l1, l2];

  let total = new Digit('0');

  for (let col2 = 0; n2; col2++){
    let node, head, product;
    let carry = 0;

    const addNode = num => {
      if (!node) {
        node = new Digit(num);
        head = node;
      } else {
        node.next = new Digit(num);
        node = node.next;
      }
    };

    n1 = l1;

    for (let z = 0; z < col2; z++) addNode(0);

    for (; n1;) {
      product = n1.value * n2.value + carry;
      carry = Math.floor(product / 10);

      addNode(product % 10);
      n1 = n1.next;
    }

    if (carry > 0) addNode(carry);

    total = addListNums(total, head);
    n2 = n2.next;
  }
  return total;
};


const linkedListToStr = head => {
  let node = head,
    output = '';

  while (node) {
    output = node.value + output;
    node = node.next;
  }

  return output;
};

const longArithmetic = fn => (numStr1, numStr2) => {
  return linkedListToStr(fn(LinkedListNum(numStr1 + ''), LinkedListNum(numStr2 + '')));
};

const addLong = longArithmetic(addListNums);
const multLong = longArithmetic(multListNums);

const power = (base, exp) => {
  let product = 1;

  for (let i = 0; i < exp; i++) {
    product = multLong(product, base);
  }

  return product;
};

const fact = num => {
  let output = num + '';

  for (let i = num - 1; i > 0; i--) {
    output = multLong(output, i);
  }

  return output;
};

module.exports = {
  addLong,
  multLong,
  power,
  fact
};
