const fs = require('fs');
const html = fs.readFileSync('saloon.template.website/index.html', 'utf8');

const idx = html.indexOf('hanssen');
console.log('Snippet around hanssen logo:');
console.log(html.slice(Math.max(0, idx - 500), idx + 2000));
