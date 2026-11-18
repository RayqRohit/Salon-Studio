const fs = require('fs');

const workFiles = fs.readdirSync('saloon.template.website/work').filter(f => f.endsWith('.html') && f !== '[object Object].html');

const details = [];

for (const f of workFiles) {
  const content = fs.readFileSync('saloon.template.website/work/' + f, 'utf8');
  // find title (usually in <title> or h1)
  const titleMatch = content.match(/<title>([^<]+)<\/title>/);
  // find main hero image for this project
  const imgMatches = [...content.matchAll(/https:\/\/framerusercontent\.com\/images\/([a-zA-Z0-9_\-]+)\.webp/g)].map(m => m[1]);
  details.push({
    file: f,
    title: titleMatch ? titleMatch[1].replace(' — Hanssen', '').trim() : f.replace('.html', ''),
    images: [...new Set(imgMatches)]
  });
}

console.log(JSON.stringify(details, null, 2));
