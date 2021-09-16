let myName = {
  firstName: "Gautam",
  lastName: "Kochar",
};

let printName = function (hometown, state, country) {
  console.log(
    `${this.firstName} ${this.lastName} , ${hometown} , ${state} , ${country}`
  );
};

let boundedPrintName = printName.bind(myName, "Dhule", "MH");
boundedPrintName("India");

Function.prototype.mybind = function (...args) {
  let context = this;
  let params = args.slice(1);
  return function (...args2) {
    context.apply(args[0], [...params, ...args2]);
  };
};

let customBoundedPrintName = printName.mybind(myName, "Dhule", "MH");
customBoundedPrintName("India");
