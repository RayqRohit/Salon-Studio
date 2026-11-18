const fs = require('fs');
const html = fs.readFileSync('saloon.template.website/index.html', 'utf8');

const startIdx = html.indexOf('All Projects');
console.log('Snippet from All Projects:');
console.log(html.slice(startIdx - 500, startIdx + 3000));
