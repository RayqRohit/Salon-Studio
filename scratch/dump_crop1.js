const sharp = require('sharp');

async function dumpCrop1() {
  const raw1 = await sharp('scratch/crop1.png').raw().toBuffer({ resolveWithObject: true });

  console.log('width:', raw1.info.width, 'height:', raw1.info.height);

  for (let y = 10; y < 45; y++) {
    let row = `y=${y}: `;
    for (let x = 40; x < 70; x += 2) {
      const idx = (y * raw1.info.width + x) * raw1.info.channels;
      const r = raw1.data[idx], g = raw1.data[idx+1], b = raw1.data[idx+2];
      row += `[${x}:(${r},${g},${b})] `;
    }
    console.log(row);
  }
}

dumpCrop1();
