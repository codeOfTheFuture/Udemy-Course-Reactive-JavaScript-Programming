// plusStream: -------(+1)----------(+1)------------>

// minusStream: ----(-1)-------(-1)--------(-1)---->

let plusStream = Bacon.fromEvent($("#plus"), "click").map(1);
let minusStream = Bacon.fromEvent($("#minus"), "click").map(-1);

let counterStream = plusStream.merge(minusStream).scan(0, (prev, curr) => {
  return prev + curr;
});

counterStream.assign($("#count"), "text");
