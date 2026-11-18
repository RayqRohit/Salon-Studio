const fs = require('fs');

for (const file of ['index.html', 'work.html']) {
  const path = 'saloon.template.website/' + file;
  if (!fs.existsSync(path)) continue;
  const html = fs.readFileSync(path, 'utf8');
  console.log('=== ' + file + ' ===');
  
  // Find "All Projects" or "Pages" or "More Templates"
  ['All Projects', 'Pages', 'More Templates', 'Gola Templates'].forEach(str => {
    const idx = html.indexOf(str);
    if (idx !== -1) {
      console.log('Found "' + str + '" in ' + file + ' at ' + idx);
      console.log(html.slice(Math.max(0, idx - 400), idx + 1000));
      console.log('---');
    }
  });
}
