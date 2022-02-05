// Given two arrays such that the first array contains multiples
// of an integer n which are less than or equal to k and similarly,
// the second array contains multiples of an integer m which are less than or equal to k.
// The task is to find the number of common elements between the arrays.

// Recursive function find the gcd  -> Maximo Comun Divisor

function gcb(a, b) {
  if (a == 0) return b;
  return gcb(b % a, a);
}

// Function to find lcm -> Minimo Comun Divisor
function lcm(n, m) {
  return (n * m) / gcb(n, m);
}

var n = 2,
  m = 3,
  k = 5;

console.log(parseInt(k / lcm(n, m)));
