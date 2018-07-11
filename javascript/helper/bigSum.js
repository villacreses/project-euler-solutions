module.exports = {
  linkedListNum
};

function digit (digitStr) {
  this.value = Number(digitStr);
  this.next = null;
}

function linkedListNum () {
  this.head = null;
}

linkedListNum.prototype.push = function (digitStr) {
  let newNode = new digit(digitStr);
  newNode.next = this.head;
  this.head = newNode;
};

linkedListNum.prototype.add = function (numString) {
  if (this.head === null) {
    for (let i = 0; i < numString.length; i++) {
      this.push(numString[i]);
    }
  } else {
    let currentNode = this.head;
    let carry = 0;
    for (let i = numString.length - 1; i >= 0; i--) {
      let addend = isNaN(numString[i]) ? 0 : Number(numString[i]);
      let sum = carry + currentNode.value + addend;

      carry = Math.floor(sum / 10);
      currentNode.value = sum % 10;

      if (currentNode.next === null) {
        currentNode.next = new digit(0);
      }
      currentNode = currentNode.next;
    }
    currentNode.value += carry;
  }
};

linkedListNum.prototype.print = function () {
  if (this.head === null) return '0';

  let output = '';
  let currentNode = this.head;

  while (currentNode !== null) {
    output = currentNode.value + output;
    currentNode = currentNode.next;
  }
  return output[0] === '0' ? output.slice(1) : output;
};
