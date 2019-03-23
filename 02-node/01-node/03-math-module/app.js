var mathlib_module = require('./mathlib_module')();
// console.log(mathlib_module);
mathlib_module.add(2, 4);
mathlib_module.multiply(2, 4);
mathlib_module.square(2);
mathlib_module.random(2, 6);


// const MathLibrary = require("./mathlib");
// const math = new MathLibrary();

// const a = 1;
// const b = 35;

// console.log("\nSum of " + a + " and " + b + " is: ", math.add(a, b));
// console.log("Product of " + a + " and " + b + " is: ", math.multiply(a, b));
// console.log("Square of " + a + " is: ", math.square(a));
// console.log("Random number between " + a + " and " + b + ": ", math.random(a, b));