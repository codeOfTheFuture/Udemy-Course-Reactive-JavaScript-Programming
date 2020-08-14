// module a.js
let a;
function assignValueToA(val) {
  // Interdependency
  a = val; // Spaghetti Code
  calculateValueOfB(a); // No separation of concern
}
// module b.js
let b;
function calculateValueOfB(a) {
  b = a + 100;
}
// main.js
// we assign a value 50 to variable a
assignValueToA(50);
// b now holds the value 150
console.log(b); // 150
// We change the value of a to 100
assignValueToA(100);
// b now holds the value 200
console.log(b); // 200

// In the example module a is proactive
// module b is passive
// module a is entirely responsible for updating module b
// we do not have separation of concerns
// each module should be responsible for itself
// but module b is entirely unaware of it's dependencies
