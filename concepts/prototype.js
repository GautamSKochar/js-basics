// Problem statement
// Add to the prototype of all functions the method defer(ms), that returns a wrapper, delaying the call by ms milliseconds.
/**
 * function f(a, b) {
 *   alert( a + b );
 * }
  
 * f.defer(1000)(1, 2); // shows 3 after 1 second
 */

function f(a, b) {
  console.log(a + b);
}

Function.prototype.defer = function (ms) {
  let f = this;
  return function (...args) {
    setTimeout(() => {
      return f.apply(this, args);
    }, ms);
  };
};

f.defer(1000)(1, 2); // shows 3 after 1 second

// Inheritance
const Person = function (firstName, birthyear) {
  this.firstName = firstName;
  this.birthyear = birthyear;
};

Person.prototype.calcAge = function () {
  console.log(2027 - this.birthyear);
};

const Student = function (firstName, birthyear, course) {
  //   this.firstName = firstName;
  //   this.birthyear = birthyear;
  Person.call(this, firstName, birthyear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

// Student.prototype = Person.prototype;
Student.prototype.constructor = Student;
Student.parent = Person.prototype;

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const gk = new Student("GK", "1995", "Computer Science");
gk.introduce();
gk.calcAge();

// console.log("Person Prototype", Person.prototype);
// console.log("Student Prototype", Student.prototype);
console.log(gk.__proto__);

console.log(gk.__proto__.__proto__);
gk.__proto__.constructor = Student;
console.log(gk instanceof Student);
console.log(gk instanceof Person);
console.log(gk instanceof Object);

// gk.instanceOf Student;
