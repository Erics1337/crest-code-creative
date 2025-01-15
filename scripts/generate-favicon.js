const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicon() {
  const sizes = [16, 32, 48];
  const pngBuffers = await Promise.all(
    sizes.map(size => 
      sharp(path.join(__dirname, '../public/favicon.svg'))
        .resize(size, size)
        .png()
        .toBuffer()
    )
  );

  // Write individual PNG files
  await Promise.all(
    pngBuffers.map((buffer, i) =>
      sharp(buffer).toFile(path.join(__dirname, `../public/favicon-${sizes[i]}x${sizes[i]}.png`))
    )
  );

  // Use the 32x32 version as the main favicon.ico
  await sharp(pngBuffers[1])
    .toFile(path.join(__dirname, '../public/favicon.ico'));
}

generateFavicon().catch(console.error);
