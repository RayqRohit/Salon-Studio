const fs = require('fs');
const html = fs.readFileSync('saloon.template.website/index.html', 'utf8');

const matches = [];
let pos = 0;
while (true) {
  const idx = html.indexOf('class="framer-prddjj"', pos);
  if (idx === -1) break;
  matches.push(idx);
  pos = idx + 20;
}
console.log('Found class="framer-prddjj" at:', matches);

if (matches.length > 0) {
  const content = html.slice(matches[0], matches[0] + 50000);
  
  // Find all titles like Beige, Darkness, Gentlemen, City, Studio, Colors, Duo, Elegance
  const titles = ['Beige', 'Darkness', 'Gentlemen', 'City', 'Studio', 'Colors', 'Duo', 'Elegance'];
  for (const t of titles) {
    const tIdx = content.indexOf(t);
    if (tIdx !== -1) {
      console.log('Title:', t);
      const snip = content.slice(Math.max(0, tIdx - 1500), tIdx + 1500);
      const img = snip.match(/src="([^"]+\.webp[^"]*)"/);
      console.log('Image:', img ? img[1] : 'not found');
      console.log('---');
    } else {
      console.log('Title not found in snippet:', t);
    }
  }
}
