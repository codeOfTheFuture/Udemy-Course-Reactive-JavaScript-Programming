// height ------a----b--------c-----d------------>
// height ---e----f------g--------h--------->

// calcBmi(weight, height)
// After applying combineWith function to weight stream and height stream bmi stream should look similar to this below
//bmi$ ---(a,e)--(b,e)---(b,f)--(c,g)--(d,g)-(g,h)-->

const height$ = Bacon.fromEvent(document.querySelector("#heightInput"), "input")
  .map((event) => {
    return parseInt(event.target.value);
  })
  .startWith(170);

const weight$ = Bacon.fromEvent(document.querySelector("#weightInput"), "input")
  .map((event) => {
    return parseInt(event.target.value);
  })
  .startWith(70);

const bmi$ = Bacon.combineWith(height$, weight$, (height, weight) => {
  const heightInMeters = height / 100;
  const bmi = weight / heightInMeters ** 2;
  return bmi.toFixed(2);
}).onValue((value) => {
  document.querySelector("#bmi").innerHTML = value;
});

height$.onValue((value) => {
  document.querySelector("#heightValue").innerHTML = value;
});

weight$.onValue((value) => {
  document.querySelector("#weightValue").innerHTML = value;
});
