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

  multiply (numString) {
    this.head = this.times(numString).head;
    return this;
  }

  power (exp) {
    const base = this.toString();
    for (let i = 2; i <= exp; i++) this.times(base);
    return this;
  }
};

