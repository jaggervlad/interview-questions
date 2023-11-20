function findAndCountVowels(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  return string
    .toLowerCase()
    .split('')
    .reduce((acc, val) => (vowels.includes(val) ? (acc += 1) : acc), 0);
}

console.log(findAndCountVowels('aabcdEeeEfguil'));
