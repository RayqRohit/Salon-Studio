const fs = require('fs');
const html = fs.readFileSync('saloon.template.website/work.html', 'utf8');

const hashes = [
  'smOLLHxUUE1fuwAoGnJlQVmY0',
  'fjsbcSbrSbXkpGEePyua6cFMbBg',
  'b4tQeJBVej8RCijw5rLzFvL994',
  'W3RTifPhVH6fwcIl4YTSmibTMx8',
  'hUNenIUyXWFh458IisAYleOXmpc',
  'rPtNHsVSs98jVk9FvDA6WMJjIs',
  '5SlqO9xsReFEAQrfrKAwuidRPc',
  'UMYEJyjHrliTdBgR5SGcdONTtqk',
  'UP79gSZEBQe4ypCOrgaF90fZD6E',
  'aNmmzqMc990oFx3uvtN2SJHyzvw'
];

for (const h of hashes) {
  const idx = html.indexOf(h);
  console.log('=== HASH:', h, '===');
  const snip = html.slice(Math.max(0, idx - 800), idx + 800);
  const titles = snip.match(/data-styles-preset="[^"]*"[^>]*>([^<]+)<\//g) || snip.match(/>([A-Z][a-zA-Z\s&]+)</g);
  console.log(titles ? titles.slice(0, 5) : 'no title');
}
