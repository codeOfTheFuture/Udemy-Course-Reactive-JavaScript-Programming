// declaring an independent variable
let a = 50;
// declaring a mathematical constraint between variable a and b
let b = a + 100;
// variable b is now holding value 150
console.log(b); // 150
// manipulating value of variable
a = 100;
// variable b is still holding value of 150
console.log(b); // 150
// unless we reassign the constraint between variable a and b,
// we can't have the constraint hold true.
b = a + 100;
// variable b is now holding value 200
console.log(b); // 200
