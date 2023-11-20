const obj = { a: 1, b: 2 };

const copySpread = { ...obj };

const copyAssing = Object.assign({}, obj);

console.log({ copyAssing });
console.log({ copySpread });
