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
  let products = [],
      carry = 0,
      l2Col = 0;
  const l1Head = l1;

  const pushProduct = head => {
    products.push(head);
  }

  while (l2) {
    let prod, head, node;
    l1 = l1Head;

    for (let i = 0; i < l2Col; i++) {
      if(!node) {
        node = new Digit('0');
        head = node;
      } else {
        node.next = new Digit('0')
      }
    }

    while (l1) {
      prod = l1.value * l2.value + carry;
      carry = Math.floor(prod / 10);

      if (!node) {
        node = new Digit(prod % 10);
        head = node;
      } else {
        node.next = new Digit(prod % 10);
        node = node.next;
      }

      l1 = l1 ? l1.next : null;
    }
    if (carry) {
      node.next = new Digit(carry);
      carry = 0;
    }
    pushProduct(head);
    l2 = l2 ? l2.next : null;
    l2Col++;
  }

  return products.reduce(addListNums, new Digit('0'));
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
  const baseList = LinkedListNum(base + '');
  let prodList = baseList;


  for(let i = 2; i <= exp; i++) {
    prodList = multListNums(prodList, baseList);
  }
  return linkedListToStr(prodList);
}

module.exports = {
  addLong,
  multLong,
  power
};
