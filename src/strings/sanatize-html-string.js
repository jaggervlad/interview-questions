function corregirHTML(html) {
  const divRegex = /<div\b[^>]*>(.*?)<div\b[^>]*>|<div\b[^>]*>([^]*)$/g;

  const htmlCorregido = html.replace(divRegex, '<div>$1$2</div>');

  return htmlCorregido;
}

// Ejemplo de uso:
const htmlOriginal =
  '<div>some chard<div><p>other aa asas sentences</p><div>another div<div>';
const htmlCorregido = corregirHTML(htmlOriginal);

console.log(htmlCorregido);
