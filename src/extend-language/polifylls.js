// MAP POLIFYLL
Array.prototype.myMap = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }

  return temp;
};

Array.prototype.myFilter = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    const element = this[i];

    if (cb(element, i, this)) temp.push(element);
  }

  return temp;
};

Array.prototype.myReduce = function (cb, initialValue) {
  let acc = initialValue;

  for (let i = 0; i < this.length; i++) {
    const element = this[i];

    acc = acc ? cb(acc, element, this) : this[i];
  }

  return acc;
};

const arr = [2, 4, 5];

console.log(
  arr.myMap((val) => {
    return val + 1;
  })
);
console.log(
  arr.myFilter((val) => {
    return val >= 4;
  })
);
console.log(
  arr.myReduce((acc, val) => {
    return (acc += val);
  }, 0)
);
