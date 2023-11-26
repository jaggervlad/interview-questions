function sortTypes(arr) {
  const sortedArr = {
    strings: [],
    numbers: [],
    objects: [],
    nulls: [],
  };

  arr.forEach((item) => {
    if (typeof item === 'string') {
      sortedArr.strings.push(item);
    } else if (typeof item === 'number') {
      sortedArr.numbers.push(item);
    } else if (item === null) {
      sortedArr.nulls.push(null);
    } else if (typeof item === 'object') {
      sortedArr.objects.push(item);
    }
  });

  const result = [];
  let stringsAdded = false;
  let numbersAdded = false;
  let nullsAdded = false;
  let objectsAdded = false;

  arr.forEach((item) => {
    if (typeof item === 'string' && !stringsAdded) {
      result.push(sortedArr.strings);
      stringsAdded = true;
    } else if (typeof item === 'number' && !numbersAdded) {
      result.push(sortedArr.numbers);
      numbersAdded = true;
    } else if (item === null && !nullsAdded) {
      result.push(sortedArr.nulls);
      nullsAdded = true;
    } else if (typeof item === 'object' && !objectsAdded) {
      result.push(sortedArr.objects);
      objectsAdded = true;
    }
  });

  return JSON.stringify(result);
}

console.log(sortTypes([1, 2, 3, 4, 5, null, this, 'hellow', 'other']));
