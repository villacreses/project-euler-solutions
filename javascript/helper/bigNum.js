function Digit (DigitStr) {
  this.value = Number(DigitStr);
  this.next = null;
}

module.exports = class LinkedListNum {
  constructor (numString) {
    this.head = new Digit(numString[numString.length - 1]);

    for (let node = this.head, i = numString.length - 2; i >= 0; i--) {
      node.next = new Digit(numString[i]);
      node = node.next;
    }
  }

  toString () {
    let output = '';
    for (let node = this.head; node; node = node.next) {
      output = node.value + output;
    }

    return output;
  }

  print () {
    console.log(this.toString());
  }

  plus (numString) {
    const output = new LinkedListNum(this.toString());
    let node = output.head;

    let carry = 0;
    for (let d = numString.length - 1; d >= 0 || carry > 0; d--) {
      let sum = node.value + carry;
      if (d >= 0) sum += Number(numString[d]);

      node.value = sum % 10;
      carry = Math.floor(sum / 10);

      if (!node.next && (d > 0 || carry > 0)) node.next = new Digit(0);
      node = node.next;
    }

    return output;
  }

  add (numString) {
    this.head = this.plus(numString).head;
    return this;
  }

  minus (numString) {
    return this;
  }

  subtract (numString) {
    this.head = this.minus(numString).head;
    return this;
  }

  times (numChar) {
    const output = new LinkedListNum(this.toString());

    let carry = 0;
    let product;

    for (let node = output.head; node; node = node.next) {
      product = node.value * Number(numChar) + carry;
      node.value = product % 10;
      carry = Math.floor(product / 10);

      if (!node.next && carry > 0) node.next = new Digit(0);
    }

    return output;
  }

  power (exp) {
    const base = this.toString();
    for (let i = 2; i <= exp; i++) this.times(base);

    return this;
  }
};

/*
const multListNums = (l1, l2) => {
  let [n1, n2] = [l1, l2];

  let total = new Digit('0');

  for (let col2 = 0, carry = 0; n2; col2++, n2 = n2.next){
    let node, head, product;

    const addNode = num => {
      if (!node) {
        node = new Digit(num);
        head = node;
      } else {
        node.next = new Digit(num);
        node = node.next;
      }
    };

    for (let z = 0; z < col2; z++) addNode(0);

    for (n1 = l1; n1; n1 = n1.next) {
      product = n1.value * n2.value + carry;
      carry = Math.floor(product / 10);
      addNode(product % 10);
    }

    if (carry > 0) addNode(carry);

    total = addListNums(total, head);
  }
  return total;
};
*/
