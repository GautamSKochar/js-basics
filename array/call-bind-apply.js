const indianAirlines = {
  airline: "Indian Airlines",
  iataCode: "IA",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

indianAirlines.book("239", "GSK");
indianAirlines.book("240", "SDK");

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = indianAirlines.book;

// Do not work - (Cannot read property 'push' of undefined)
// book("123", "abc");

// Call method
book.call(eurowings, 23, "MSK");

// Apply method
book.apply(eurowings, [23, "TSK"]);

// Bind
const boundedFn = book.bind(eurowings);
boundedFn(1323, "Gautam");

const bookIA24 = book.bind(indianAirlines, 24);

bookIA24("Passenger 1");
bookIA24("Passenger 2");

console.log("----EW bookings");
console.log(eurowings.bookings);
console.log("----IA bookings");
console.log(indianAirlines.bookings);
