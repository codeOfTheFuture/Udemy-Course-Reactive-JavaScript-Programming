// module a.js
let a;
function setValueOfA(val) {
  a = val;
  // we are now emitting event 'aChanged'
  // with data a value of a
  events.emit("aChanged", a);
}
// module b.js
let b;
function computeValueOfB(a) {
  b = a + 100;
}
// here we are subscribing the event 'aChanged',
// then module b is self computing itself.
events.on("aChanged", computeValueOfB);
// main.js
setValueOfA(50);
// we can see the value of b
// is now computed automatically by listening to a.
console.log(b); // 150
// Now we change the value of a.
setValueOfA(100);
// When we change value of a again, the value of b reactively changes.
console.log(b); // 200

// Here module a has no concerns about the module that it will be effecting.
// and only emits it's changes
// Module b has no other hidden dependencies that are outside of it's scope,
// thus module b is and active module.
