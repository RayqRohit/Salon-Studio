const fs = require('fs');
const html = fs.readFileSync('saloon.template.website/index.html', 'utf8');

const idx = html.indexOf('<footer');
console.log('Snippet of footer HTML:');
console.log(html.slice(idx, idx + 3500));
