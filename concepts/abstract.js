// //Created an abstract class (constructor function)
function Employee() {
  this.empName = "empName";
  if (this.constructor === Employee) {
    throw new Error("You cannot create an instance of     Abstract Class");
  }
}
// Method (function) of our abstract class
Employee.prototype.display = function () {
  return "Employee name is: " + this.empName;
};
//Created a subclass (constructor function)
function Manager(fullName) {
  this.empName = fullName;
}
//Created an object of subclass (extending abstract class)
Manager.prototype = Object.create(Employee.prototype);
const mang = new Manager("G K");
console.log(mang.display());

// Class
class EmployeeCL {
  constructor() {
    if (this.constructor == EmployeeCL) {
      throw new Error(" Object of Abstract Class cannot be created");
    }
  }
  display() {
    throw new Error("Abstract Method has no implementation");
  }
}
class ManagerCL extends EmployeeCL {
  display() {
    // super.display();
    console.log("I am a Manager");
  }
}
// var emp = new Employee(); // throw new Error(" Object of Abstract Class cannot be created");
const mangCL = new ManagerCL();
mangCL.display();
