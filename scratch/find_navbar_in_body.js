const fs = require('fs');
const html = fs.readFileSync('saloon.template.website/index.html', 'utf8');

// Find all occurrences of hanssen
let pos = 0;
while (true) {
  const idx = html.indexOf('hanssen', pos);
  if (idx === -1) break;
  if (idx > 5000) {
    console.log('Found at:', idx);
    console.log(html.slice(Math.max(0, idx - 400), idx + 800));
    console.log('---');
  }
  pos = idx + 10;
}
