const fs = require('fs');
const html = fs.readFileSync('saloon.template.website/work.html', 'utf8');

const scripts = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)];
const script = scripts[10][1];

// Find all strings in this script
const strMatches = [...script.matchAll(/"([^"\\]*(\\.[^"\\]*)*)"/g)].map(m => m[1]);

// Let's filter for project names or webp
console.log('Project titles mentioned:');
const titles = ['Beige', 'Darkness', 'Gentlemen', 'City', 'Nature', 'Brand', 'Studio', 'Colors', 'Duo', 'Elegance', 'Hat', 'Black & White', 'Streets', 'Stoic'];
for (const t of titles) {
  const idx = script.indexOf(t);
  if (idx !== -1) {
    console.log(t, '->', script.slice(Math.max(0, idx - 100), idx + 200));
  }
}
