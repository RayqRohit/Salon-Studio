const fs = require('fs');

const files = ['index.html', 'work.html'];
for (const file of files) {
  const path = 'saloon.template.website/' + file;
  if (!fs.existsSync(path)) continue;
  const html = fs.readFileSync(path, 'utf8');
  console.log('=== FILE:', file, '===');
  
  // Find all cards
  const regex = /<p[^>]*>([A-Z][a-zA-Z\s]+)<\/p>/g;
  let m;
  const found = [];
  while ((m = regex.exec(html)) !== null) {
    const text = m[1].trim();
    if (['Beige', 'Darkness', 'Gentlemen', 'City', 'Studio', 'Colors', 'Duo', 'Elegance', 'Selected Work', 'Latest Work'].includes(text)) {
      // Find surrounding image
      const snip = html.slice(Math.max(0, m.index - 1000), m.index + 1000);
      const imgMatch = snip.match(/src="([^"]+\.webp[^"]*)"/);
      found.push({ title: text, img: imgMatch ? imgMatch[1].replace(/&amp;/g, '&') : null });
    }
  }
  console.log(JSON.stringify(found, null, 2));
}
