const fs = require('fs');
const html = fs.readFileSync('saloon.template.website/index.html', 'utf8');

const idx = html.indexOf('framer-1pjjggg');
console.log('Snippet of framer-1pjjggg:');
console.log(html.slice(idx, idx + 4500));
