function designerPdfViewer(h, word) {
  // Write your code here
  let maxHeight = 0;

  for (let i = 0; i < word.length; i++) {
    // JS devuelve el valor code de a que comienza en 97
    let charI = word.charCodeAt(i) - 97;
    maxHeight = Math.max(maxHeight, h[charI]);
  }

  return maxHeight * word.length;
}

const heights = [
  1, 3, 1, 3, 1, 4, 1, 3, 2, 1, 1, 3, 1, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 4, 1,
];
const wordToHighlight = 'example';

const highlightedArea = designerPdfViewer(heights, wordToHighlight);
console.log('Área resaltada:', highlightedArea);
