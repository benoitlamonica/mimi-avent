#!/bin/bash

# Create iconset directory
mkdir -p build/icon.iconset

# Generate all required sizes for macOS icons
node -e "
import sharp from 'sharp';
const sizes = [16, 32, 64, 128, 256, 512, 1024];
const promises = [];

sizes.forEach(size => {
  // Regular size
  promises.push(
    sharp('build/icon.svg')
      .resize(size, size)
      .png()
      .toFile(\`build/icon.iconset/icon_\${size}x\${size}.png\`)
  );
  
  // 2x size (except for 1024)
  if (size <= 512) {
    promises.push(
      sharp('build/icon.svg')
        .resize(size * 2, size * 2)
        .png()
        .toFile(\`build/icon.iconset/icon_\${size}x\${size}@2x.png\`)
    );
  }
});

Promise.all(promises).then(() => console.log('✓ Generated all iconset files'));
" && iconutil -c icns build/icon.iconset -o build/icon.icns

echo "✨ macOS icon generated: build/icon.icns"
