function beautifulDays(i, j, k) {
  // Write your code here
  let countDayBeautifuls = 0;
  for (let x = i; x <= j; x++) {
    const currNumber = x;
    const reverseNumber = parseInt(x.toString().split('').reverse().join(''));

    const result = Math.abs(currNumber - reverseNumber) % k;

    countDayBeautifuls =
      result === 0 ? ++countDayBeautifuls : countDayBeautifuls;
  }

  return countDayBeautifuls;
}
beautifulDays(20, 23, 6);
