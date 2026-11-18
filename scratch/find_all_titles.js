const fs = require('fs');
const html = fs.readFileSync('saloon.template.website/work.html', 'utf8');

const regex = /data-styles-preset="szJtSwdtx">([^<]+)<\/h[0-9]>/g;
let m;
const titles = [];
while ((m = regex.exec(html)) !== null) {
  titles.push(m[1].trim());
}
console.log('All titles matching preset szJtSwdtx:', titles);

// Also check all <h2> or <h3>
const allH2 = [...html.matchAll(/<h[1-4][^>]*>([^<]+)<\/h[1-4]>/g)].map(m => m[1].trim());
console.log('All headings in work.html:', [...new Set(allH2)]);
