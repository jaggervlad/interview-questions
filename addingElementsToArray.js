function addETA(ele, arr) {
  return [...arr, ele];
}

const arr = [1, 2, 3, 4];

console.log({ arr });
console.log(addETA(5, arr));
