const fs = require('fs');
const html = fs.readFileSync('saloon.template.website/work.html', 'utf8');

// Find all script tags or JSON
const scripts = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)];
console.log('Total scripts in work.html:', scripts.length);

for (let i = 0; i < scripts.length; i++) {
  const content = scripts[i][1];
  if (content.includes('Studio') || content.includes('Colors') || content.includes('Elegance')) {
    console.log('Found in script index:', i, 'length:', content.length);
    // Find where Studio is
    const idx = content.indexOf('Studio');
    console.log(content.slice(Math.max(0, idx - 200), idx + 800));
  }
}
