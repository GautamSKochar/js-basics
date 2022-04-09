let counter = 0;
const getSearches = (arguments) => {
  console.log("searching...", counter++);
  console.log(arguments);
};

const debounceSearches = function (func, delay) {
  let timer;
  return function () {
    let args = arguments;
    let context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context,args);
    }, delay);
  };
};

const betterSearches = debounceSearches(getSearches, 300);
