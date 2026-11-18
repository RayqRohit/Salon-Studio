const fs = require('fs');
const html = fs.readFileSync('saloon.template.website/index.html', 'utf8');

console.log(html.slice(180000, 183500));
