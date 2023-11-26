const sentence = 'Hellow world motherfuckers';

function reverseWords(sentence) {
  return sentence.split(' ').reverse().join(' ');
}

console.log(reverseWords(sentence));
