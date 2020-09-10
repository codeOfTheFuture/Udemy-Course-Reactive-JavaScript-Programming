// Operators
// filter
// map
// concat
// merge
// combineLatest

// const streamA = Rx.Observable.interval(100);

// ---0---1---2---3---4---5---6---7-->

// ----0----1----2----3----4----5----->

// ----1----3----5------->

// ---10---30---50------->

// streamA
//   .take(6)
//   .filter((x) => {
//     return x % 2 !== 0;
//   })
//   .map((val) => {
//     return val * 10;
//   })
//   .subscribe((x) => {
//     console.log(x);
//   });

// ---0---1---2---3---4---5---6---7-->

// -------------------6---7---8---9-->

// -----------------------7-------9-->

// ----------------------70-------90-->

// streamA
//   .skip(6)
//   .filter((x) => {
//     return x % 2 !== 0;
//   })
//   .map((val) => {
//     return val * 10;
//   })
//   .subscribe((x) => {
//     console.log(x);
//   });

// const streamA = Rx.Observable.interval(100).take(6);

// const streamB = Rx.Observable.of(1, 2, 3, 4);

// stream a ---0---1---2---3---4---5-|-->

// steam b -(1,2,3,4)-|>

// stream a ---0---1---2---3---4---5-|--(1,2,3,4)-|>
// stream output

// const steamOutput = streamA.concat(streamB).subscribe((x) => {
//   console.log(x);
// });

// const streamA = Rx.Observable.interval(100).take(6);

// const streamB = Rx.Observable.interval(500).take(2);

// stream A --0--1--2--3--4--5|-->

// stream B --------------1--------------2-|-->

// output --0--1--2--3--4-1--5----=------2-|-->

// const streamOutput = streamA.merge(streamB).subscribe((x) => {
//   console.log(x);
// });

const streamA = Rx.Observable.interval(300).take(6);

const streamB = Rx.Observable.interval(500).take(4);

// stream A ---0---1---2---3---4---5----|-->

// stream B ---0-----1-------2-----3----|-->

// output ---0---1-2-3---4-5-6--7-8--|-->

const streamOutput = Rx.Observable.combineLatest(streamA, streamB, (a, b) => {
  return a + b;
}).subscribe((x) => {
  console.log(x);
});
