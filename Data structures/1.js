const base = 1000;
const size = 4;
const A = [5, 10, 15, 20, 25];

function address(i) {
  return base + (i * size);
}

console.log('A[0] address =', address(0)); 
console.log('A[2] address =', address(2)); 
console.log('A[4] address =', address(4)); 