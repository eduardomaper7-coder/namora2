const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const folder = './public';

fs.readdirSync(folder).forEach(async (file) => {
  const ext = path.extname(file).toLowerCase();

  if (['.jpg', '.jpeg', '.png'].includes(ext)) {
    const input = path.join(folder, file);
    const output = path.join(
      folder,
      path.basename(file, ext) + '.webp'
    );

    try {
      await sharp(input)
        .webp({ quality: 80 })
        .toFile(output);

      console.log(`✓ ${file} -> ${path.basename(output)}`);
    } catch (err) {
      console.error(`Error con ${file}:`, err);
    }
  }
});