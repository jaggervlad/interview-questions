function checkPalindrome(input) {
  // const reversed = input.split('').reverse().join('');
  // return input === reversed;

  const length = input.length;

  for (let i = 0; i < length / 2; i++) {
    if (input[i] !== input[length - i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(checkPalindrome('aabaa'));
