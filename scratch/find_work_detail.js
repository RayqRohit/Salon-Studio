const fs = require('fs');
const html = fs.readFileSync('saloon.template.website/work.html', 'utf8');

const targets = ['Studio', 'Colors', 'Duo', 'Elegance', 'Hat', 'Black', 'Streets', 'Stoic'];

for (const t of targets) {
  let idx = html.indexOf(t);
  while (idx !== -1) {
    // Check if near an img or webp
    const snip = html.slice(Math.max(0, idx - 800), idx + 800);
    const m = snip.match(/https:\/\/framerusercontent\.com\/images\/[a-zA-Z0-9_\-]+\.webp/);
    if (m) {
      console.log(t, '->', m[0]);
      break;
    }
    idx = html.indexOf(t, idx + 1);
  }
}
