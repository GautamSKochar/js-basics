let charArr = ["a", "b", "c", "d", "a", "a", "b"];
// a3b2cd

// [1,1,1,1,1,1,5,3,6,8]
// return 1, return -1

// this_is_variable ==> thisIsVariable
str = "this_is_variable";

let chars = str.split("_");
let output = "";
chars.forEach((element, index) => {
  if (index === 0) {
    output += element;
  } else {
    const capChar = element[0].toUpperCase();
    output = output + capChar + element.slice(1);
  }
});
console.log(str, "==>", output);
