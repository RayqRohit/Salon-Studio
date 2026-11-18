const fs = require('fs');
const html = fs.readFileSync('saloon.template.website/index.html', 'utf8');

const idx = html.indexOf('framer-prddjj');
const snip = html.slice(idx, idx + 40000);

// Let's find all project links in the grid
const linkRegex = /<a[^>]*href=\"([^\"]+)\"[^>]*>([\s\S]*?)<\/a>/g;
let match;
const projects = [];

while ((match = linkRegex.exec(snip)) !== null) {
  const full = match[0];
  const href = match[1];
  if (href.includes('#') || href.includes('.html')) {
    const titleMatch = full.match(/data-styles-preset=\"[^\"]*\"[^>]*>([^<]+)<\/p>/) || full.match(/<p[^>]*>([^<]+)<\/p>/);
    const imgMatch = full.match(/src=\"([^\"]+)\"/);
    if (titleMatch && imgMatch) {
      projects.push({
        title: titleMatch[1].trim(),
        href: href,
        img: imgMatch[1]
      });
    }
  }
}

console.log('Found projects:', JSON.stringify(projects, null, 2));
