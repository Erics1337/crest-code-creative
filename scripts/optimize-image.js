const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, '../public/images/crested-butte-landscape.jpg');
const outputPath = path.join(__dirname, '../public/images/crested-butte-landscape.webp');

sharp(inputPath)
  .resize(1920, null, { 
    withoutEnlargement: true,
    fit: 'inside'
  })
  .webp({ 
    quality: 80,
    effort: 6 
  })
  .toFile(outputPath)
  .then(info => console.log('Image optimized:', info))
  .catch(err => console.error('Error optimizing image:', err));
