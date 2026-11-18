const fs = require('fs');
const html = fs.readFileSync('saloon.template.website/work.html', 'utf8');

// Find all cards in work.html
const cardNames = ['Beige', 'Darkness', 'Gentlemen', 'City', 'Studio', 'Colors', 'Duo', 'Elegance'];
const results = [];

// find occurrences of data-framer-name
const matches = [...html.matchAll(/data-framer-name="([A-Z][a-zA-Z\s]+)"/g)].map(m => m[1]);
console.log('Framer names in work.html:', [...new Set(matches)]);

// Let's search around card occurrences
cardNames.forEach(name => {
  let idx = 0;
  while ((idx = html.indexOf(name, idx)) !== -1) {
    const snip = html.slice(Math.max(0, idx - 1200), idx + 1200);
    const img = snip.match(/https:\/\/framerusercontent\.com\/images\/[a-zA-Z0-9_\-]+\.webp/);
    results.push({ name, img: img ? img[0] : null, idx });
    idx += name.length + 10;
  }
});

// Group by name
const unique = {};
results.forEach(r => {
  if (r.img && !unique[r.name]) unique[r.name] = r.img;
});
console.log('Unique cards:', unique);
