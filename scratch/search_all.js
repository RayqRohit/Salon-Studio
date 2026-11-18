const fs = require('fs');

const files = fs.readdirSync('saloon.template.website');
for (const f of files) {
  if (f.endsWith('.html') || f.endsWith('.js')) {
    const content = fs.readFileSync('saloon.template.website/' + f, 'utf8');
    const matches = ['Beige', 'Darkness', 'Gentlemen', 'City', 'Studio', 'Colors', 'Duo', 'Elegance'].filter(t => content.includes(t));
    if (matches.length > 0) {
      console.log(f, 'has matches:', matches);
    }
  }
}
