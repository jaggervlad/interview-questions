function mergeArrs(arr1, arr2) {
  return [...arr1, arr2];
}

const arr1 = [1];
const arr2 = [2];

console.log({ arr1, arr2 });

console.log(mergeArrs(arr1, arr2));
