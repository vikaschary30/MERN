function sumAll(ar) {
  return ar.reduce((sum, val) => sum + val, 0);
}
console.log(sumAll([5,9,2,3,7]));

function processArguments(primaryFunction,...args) {
  return primaryFunction(...args);
}

function add(x,y) {
  return x + y;
}
console.log(processArguments(add, 55, 62));