const expression = "({{}})[]()";

const findBalanceExpression = (exp) => {
  let stack = [];
  for (i = 0; i < exp.length; i++) {
    let x = exp[i];
    if (x == "(" || x == "{" || x == "[") {
      stack.push(x);
      continue;
    }
    if (stack.length === 0) return;
    const check = stack.pop();
    switch (x) {
      case "}":
        if (check === ")" || check === "]") return false;
        break;
      case ")":
        if (check === "}" || check === "]") return false;
        break;
      case "]":
        if (check === "}" || check === ")") return false;
        break;
    }
  }
  return stack.length === 0;
};

if (findBalanceExpression(expression)) {
  console.log("Brackets balanced");
} else {
  console.log("Brackets not balanced");
}

// With while loop
const checkParanthesis = function (s) {
  if (typeof s !== "string" && s.length % 2 !== 0) return false;
  let i = 0;
  let arr = [];
  while (i < s.length) {
    if (s[i] == "{" || s[i] == "(" || s[i] == "[") {
      arr.push(s[i]);
    } else if (s[i] == "}" && arr[arr.length - 1] === "{") {
      arr.pop(s[i]);
    } else if (s[i] == ")" && arr[arr.length - 1] === "(") {
      arr.pop(s[i]);
    } else if (s[i] == "]" && arr[arr.length - 1] === "[") {
      arr.pop(s[i]);
    } else {
      return false;
    }
    i++;
  }
  return arr.length === 0;
};

console.log(checkParanthesis("{{[]()}}"));
