const fs = require('fs');
const html = fs.readFileSync('saloon.template.website/work.html', 'utf8');

const scripts = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)];
const script = scripts[10][1];

// Let's find all images in the entire HTML or script
const allImages = [...script.matchAll(/"(https:\/\/framerusercontent\.com\/images\/[^"]+\.webp)"/g)].map(m => m[1]);
console.log('Images in script 10:', allImages);

// If not full URL, look for image hashes like /images/[hash].webp
const hashes = [...script.matchAll(/"([a-zA-Z0-9_\-]{20,}\.webp)"/g)].map(m => m[1]);
console.log('Hashes in script 10:', hashes);

// Let's search the whole work.html for all framerusercontent.com/images
const fullImgs = [...html.matchAll(/https:\/\/framerusercontent\.com\/images\/([a-zA-Z0-9_\-]+)\.webp/g)].map(m => m[1]);
console.log('All unique image hashes in work.html:', [...new Set(fullImgs)]);
