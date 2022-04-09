const me = {
  name: "Paweł Wojtków",
  thisInArrow: () => {
    console.log("My name is " + this.name);
  },
  thisInRegular() {
    console.log("My name is " + this.name);
  },
};
me.thisInArrow();
me.thisInRegular();
