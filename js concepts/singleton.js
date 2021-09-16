// Function base singleton pattern

// #1
function Singleton() {
  if (!Singleton._instance) {
    Singleton._instance = this;
  }
  Singleton.getInstance = function () {
    return this._instance;
  };

  return Singleton._instance;
}

Singleton();
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log("Same instance fun 1? " + (instance1 === instance2));

// #2

// // #2
let singletonFun = (function () {
  let instance;
  function createInstance() {
    let obj = new Object("I am the instance");
    return obj;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const instance3 = singletonFun.getInstance();
const instance4 = singletonFun.getInstance();

console.log("Same instance fun 2? " + (instance3 === instance4));

// Class base singleton pattern
class SingletonClass {
  constructor() {
    if (!SingletonClass._instance) {
      SingletonClass._instance = this;
    }
    return SingletonClass._instance;
  }
}

const instance5 = new SingletonClass();
const instance6 = new SingletonClass();
console.log("Same instance class? " + (instance5 === instance6));
