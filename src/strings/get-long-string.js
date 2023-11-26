function getLongStringBetweenRepeatChars(input) {
  const stringsMap = input.split('').reduce(
    (acc, el) => {
      if (acc.longString.includes(el)) {
        acc.chunks.push(acc.longString);
        acc.longString = el;
      } else {
        acc.longString += el;
      }

      return acc;
    },
    { chunks: [], longString: '' }
  );

  return stringsMap.chunks.reduce(
    (acc, el) => (el.length > acc.length ? el : acc),
    stringsMap.longString
  );
}

console.log(getLongStringBetweenRepeatChars('ABCIILMNSOPEDDDFGHIJKLMN'));
