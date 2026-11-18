const fs = require('fs');
const html = fs.readFileSync('saloon.template.website/index.html', 'utf8');

const svgIdx = html.indexOf('id="svg12391343727"');
if (svgIdx !== -1) {
  console.log('SVG definition:');
  console.log(html.slice(svgIdx - 50, svgIdx + 500));
}

['framer-1e9gdwz', 'framer-1g3p886', 'framer-o0j6sn', 'framer-4rviv5'].forEach(cls => {
  const regex = new RegExp('\\.' + cls + '[^{]*\\{[^}]*\\}', 'g');
  let m;
  while ((m = regex.exec(html)) !== null) console.log(m[0]);
});
