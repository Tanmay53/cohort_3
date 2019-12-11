class Stack {
  constructor() {
    this.arr = [];
  }
  push(val) {
    this.arr.push(val);
  }
  
  pop() {
    if (this.arr.length == 0) {
      return "Underflow";
    }
    return this.arr.pop();
  }
  
  peek() {
    return this.arr[this.arr.length - 1];
  }
  
  isEmpty() {
    return this.arr.length == 0;
  }

  printStack() {
    var str = '';
    for (var i = 0; i < this.arr.length; i++) {
      str += this.arr[i] + ' '
    }
    return str;
  }
}

// Store Stack class in stack1
stack1 = new Stack;

// push in stack1
stack1.push(10);
stack1.push('hello');
stack1.push(true);
stack1.push(0);
stack1.push(obj = {
  name: 'suyash',
  age: 20
});
console.log(stack1.printStack());