var Stack = function () {
  this.count = 0;
  this.storage = {};

  this.push = function (val) {
    this.storage[this.count] = val;
    this.count++;
  };

  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = function () {
    return this.count;
  };
  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

var myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push("This is stack");
myStack.pop();
console.log(myStack.peek());
console.log(myStack.size());
