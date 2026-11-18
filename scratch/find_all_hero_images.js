const fs = require('fs');

const slugs = [
  'beige',
  'darkness',
  'gentlemen',
  'city',
  'studio',
  'colors',
  'duo',
  'elegance',
  'hat',
  'black-white',
  'streets',
  'stoic'
];

const results = [];

for (const slug of slugs) {
  const filePath = 'saloon.template.website/work/' + slug + '.html';
  if (!fs.existsSync(filePath)) {
    console.log('File not found:', filePath);
    continue;
  }
  const html = fs.readFileSync(filePath, 'utf8');
  
  // The main image in a project page is in the hero section or first large webp
  // Look for data-framer-name="Image" or hero img
  const imgMatches = [...html.matchAll(/https:\/\/framerusercontent\.com\/images\/([a-zA-Z0-9_\-]+)\.webp/g)].map(m => m[1]);
  
  // Also check title
  const title = slug.charAt(0).toUpperCase() + slug.slice(1).replace('-white', ' & White');
  
  // Find which of these image hashes is the main cover image
  results.push({
    slug,
    title,
    imgs: imgMatches
  });
}

console.log(JSON.stringify(results, null, 2));
