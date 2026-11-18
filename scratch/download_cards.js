const fs = require('fs');
const https = require('https');

const cards = [
  {
    id: "beige",
    title: "Beige",
    filename: "work-beige.webp",
    url: "https://framerusercontent.com/images/fjsbcSbrSbXkpGEePyua6cFMbBg.webp"
  },
  {
    id: "darkness",
    title: "Darkness",
    filename: "work-darkness.webp",
    url: "https://framerusercontent.com/images/b4tQeJBVej8RCijw5rLzFvL994.webp"
  },
  {
    id: "gentlemen",
    title: "Gentlemen",
    filename: "work-gentlemen.webp",
    url: "https://framerusercontent.com/images/W3RTifPhVH6fwcIl4YTSmibTMx8.webp"
  },
  {
    id: "city",
    title: "City",
    filename: "work-city.webp",
    url: "https://framerusercontent.com/images/hUNenIUyXWFh458IisAYleOXmpc.webp"
  },
  {
    id: "studio",
    title: "Studio",
    filename: "work-studio.webp",
    url: "https://framerusercontent.com/images/6DHQ9mTE6aQdmLw1CJQREnuGhPY.webp"
  },
  {
    id: "colors",
    title: "Colors",
    filename: "work-colors.webp",
    url: "https://framerusercontent.com/images/6kFmryka7XfpECQ3Vi4UjRJOU.webp"
  },
  {
    id: "duo",
    title: "Duo",
    filename: "work-duo.webp",
    url: "https://framerusercontent.com/images/xZzoe07QtxjZ0ivRGOq9L2ODw.webp"
  },
  {
    id: "elegance",
    title: "Elegance",
    filename: "work-elegance.webp",
    url: "https://framerusercontent.com/images/D3RYtM9hLEI6yXLGgcmQwxuDBQ.webp"
  },
  {
    id: "hat",
    title: "Hat",
    filename: "work-hat.webp",
    url: "https://framerusercontent.com/images/8qCjecxONGsY11qiezu5EZOyc.webp"
  },
  {
    id: "black-white",
    title: "Black & White",
    filename: "work-black-white.webp",
    url: "https://framerusercontent.com/images/27TqVt8w6dBLXWItsgJR10eeQ.webp"
  }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error('Failed to download ' + url + ' status: ' + res.statusCode));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
      file.on('error', reject);
    }).on('error', reject);
  });
}

async function run() {
  for (const c of cards) {
    const dest = 'public/images/' + c.filename;
    console.log('Downloading', c.title, 'to', dest);
    try {
      await download(c.url, dest);
      console.log('✓ Success:', c.filename);
    } catch (err) {
      console.error('✗ Failed:', c.filename, err.message);
    }
  }
}

run();
