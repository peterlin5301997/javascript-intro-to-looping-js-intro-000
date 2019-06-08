function forLoop(array) {
  for(let i = 0; i < 25; i++) {
    if (i == 0) {
      array.push(`I am ${i} strange loop.`);
    }
    else {
      array.push(`I am ${i} strange loops.`);
    }
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
