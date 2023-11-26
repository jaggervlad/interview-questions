function compareTriplets(a, b) {
  let result = [0, 0];

  if (a.length !== b.length) return;

  for (let i = 0; i < a.length; i++) {
    const aValue = a[i];
    const bValue = b[i];

    if (aValue > bValue) {
      result[0] = ++result[0];
    }

    if (bValue > aValue) {
      result[1] = ++result[1];
    }
  }

  return result;
}

const a = [17, 28, 30];
const b = [99, 16, 8];
console.log('Compare triplets', compareTriplets(a, b));
