const fs = require('fs');
const html = fs.readFileSync('saloon.template.website/work.html', 'utf8');

// Find all occurrences of .webp in work.html
const allImgs = [...html.matchAll(/(https:\/\/framerusercontent\.com\/images\/[a-zA-Z0-9_\-]+\.webp)/g)].map(m => m[1]);
console.log('Total webp images in work.html:', allImgs.length);
console.log([...new Set(allImgs)]);

// Check where Studio, Colors, Duo, Elegance are
['Studio', 'Colors', 'Duo', 'Elegance', 'Urban', 'Shadow', 'Light'].forEach(word => {
  const count = (html.match(new RegExp(word, 'g')) || []).length;
  console.log(word, 'count:', count);
  let idx = 0;
  while ((idx = html.indexOf(word, idx)) !== -1) {
    console.log('  context:', html.slice(Math.max(0, idx - 50), idx + 100));
    idx += word.length + 5;
    break;
  }
});
