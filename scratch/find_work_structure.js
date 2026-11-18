const fs = require('fs');
const html = fs.readFileSync('saloon.template.website/work.html', 'utf8');

// find all occurrences of <img>
const imgRegex = /<img[^>]+src="([^">]+)"[^>]*>/g;
let m;
while ((m = imgRegex.exec(html)) !== null) {
  const src = m[1];
  if (src.includes('.webp')) {
    const snip = html.slice(Math.max(0, m.index - 600), m.index + 600);
    // Find any text
    const textMatches = [...snip.matchAll(/>([A-Za-z0-9\s&]+)</g)].map(x => x[1].trim()).filter(x => x.length > 2 && x.length < 30);
    console.log('IMG:', src.split('?')[0].split('/').pop());
    console.log('Nearby text:', textMatches);
    console.log('---');
  }
}
