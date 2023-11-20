function mostCommonStringBegginer(arr) {
  const mappingStrings = {};

  arr.forEach((value) => {
    mappingStrings[value] = !mappingStrings[value]
      ? 1
      : mappingStrings[value] + 1;
  });

  let maxChar;
  let maxValue = 0;

  for (let mappingString in mappingStrings) {
    if (mappingStrings[mappingString] > maxValue) {
      maxChar = mappingString;
      maxValue = mappingStrings[mappingString];
    }
  }
  return maxChar;
}

const mostCommonStringPro = (arr) => {
  const mappingStringsCount = arr.reduce((acc, el) => {
    acc[el] = acc[el] ? (acc[el] += 1) : 1;

    return acc;
  }, {});

  const result = Object.entries(mappingStringsCount).reduce(
    (acc, el) => {
      return el[1] > acc[1] ? el : acc;
    },
    [null, 0]
  );

  return result[0];
};

console.log(mostCommonStringPro(['a', 'b', 'c', 'd', 'f', 'd', 'd']));
console.log(mostCommonStringBegginer(['a', 'b', 'c', 'd', 'f', 'd', 'd']));
