const fs = require('fs');
const html = fs.readFileSync('saloon.template.website/index.html', 'utf8');

const idx = html.indexOf('framer-pxfg3');
console.log('Snippet of footer:');
console.log(html.slice(idx, idx + 4500));
