// hellow => hElLoW

function camelLetter(string) {
  return string
    .split('')
    .reduce(
      (acc, el, i) =>
        (acc = acc += i % 2 === 0 ? el.toUpperCase() : el.toLowerCase()),
      ''
    );
}

console.log(camelLetter('yo eli'));
console.log(camelLetter('hellow'));
