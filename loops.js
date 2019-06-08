function forLoop(array) {
  for(let i = 0; i < 25; i++) {
    console.log(`"I am ${i} strange loop{i === 0 ? '' : 's'}."`);
  }
}

function whileLoop(n) {
  while(n >= 0) {
    console.log(n);
    n++;
  }
  return "done";
}

function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(num) {
  do {
    console.log("I run once regardless.")
  } while(incrementVariable() < num)
}

var i = 0;
