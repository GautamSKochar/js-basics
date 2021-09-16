let fruits = [];
fruits.forEach(function (item, index, array) {
  console.log(item, index);
});

(function () {
  naav = "my name";
  console.log(`test ${this.naav}`);
})();
