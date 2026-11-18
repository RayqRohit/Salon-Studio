const fs = require('fs');

// We have index.html, work.html and all files in saloon.template.website
const allFiles = fs.readdirSync('saloon.template.website');
const cardData = [
  'Beige',
  'Darkness',
  'Gentlemen',
  'City',
  'Nature',
  'Brand',
  'Studio',
  'Colors',
  'Duo',
  'Elegance',
  'Hat',
  'Black & White',
  'Streets',
  'Stoic'
];

const results = {};

for (const file of allFiles) {
  if (!file.endsWith('.html') && !file.endsWith('.js')) continue;
  const content = fs.readFileSync('saloon.template.website/' + file, 'utf8');
  
  for (const name of cardData) {
    if (results[name]) continue;
    const idx = content.indexOf(name);
    if (idx !== -1) {
      const snip = content.slice(Math.max(0, idx - 1500), idx + 1500);
      const imgMatch = snip.match(/https:\/\/framerusercontent\.com\/images\/[a-zA-Z0-9_\-]+\.webp/);
      if (imgMatch) {
        results[name] = { file, img: imgMatch[0] };
      }
    }
  }
}

console.log('Results:\n', JSON.stringify(results, null, 2));
