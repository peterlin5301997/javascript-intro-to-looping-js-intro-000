function forLoop(array) {
  for(let i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop${i === 0 ? 's' : ''}.`);
  }
  return array;
}

function whileLoop(n) {
  while(n >= 0) {
    return n;
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
