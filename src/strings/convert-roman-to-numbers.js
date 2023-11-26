const ROMAN_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function converRomanToNumber(romanNum) {
  let result = 0;
  let prevValue = 0;

  for (let i = romanNum.length - 1; i >= 0; i--) {
    const currentChar = romanNum[i];
    const romanCharValue = ROMAN_VALUES[currentChar];

    if (romanCharValue >= prevValue) {
      result += romanCharValue;
    } else {
      result -= romanCharValue;
    }

    prevValue = romanCharValue;
  }

  return result;
}

const examples = 'XXIV';
console.log(converRomanToNumber(examples));
