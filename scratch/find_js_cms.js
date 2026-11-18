const fs = require('fs');

// Search in all js chunks in saloon.template.website for the list of projects
const jsFiles = fs.readdirSync('saloon.template.website').filter(f => f.endsWith('.js'));
console.log('JS files:', jsFiles);

for (const js of jsFiles) {
  const content = fs.readFileSync('saloon.template.website/' + js, 'utf8');
  if (content.includes('Beige') && content.includes('Darkness')) {
    console.log('Found in', js);
    // Find where Beige is
    const idx = content.indexOf('Beige');
    console.log(content.slice(Math.max(0, idx - 100), idx + 1000));
  }
}
