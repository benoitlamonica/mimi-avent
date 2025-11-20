import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { mkdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const buildDir = join(__dirname, '../build');

// Ensure build directory exists
mkdirSync(buildDir, { recursive: true });

const svgPath = join(buildDir, 'icon.svg');

// Generate PNG icons
async function generateIcons() {
  try {
    // Generate 512x512 PNG
    await sharp(svgPath)
      .resize(512, 512)
      .png()
      .toFile(join(buildDir, 'icon.png'));
    
    console.log('✓ Generated icon.png');

    // Generate 1024x1024 for macOS
    await sharp(svgPath)
      .resize(1024, 1024)
      .png()
      .toFile(join(buildDir, 'icon@2x.png'));
    
    console.log('✓ Generated icon@2x.png');

    // Generate 256x256 for Linux
    await sharp(svgPath)
      .resize(256, 256)
      .png()
      .toFile(join(buildDir, 'icon-256.png'));
    
    console.log('✓ Generated icon-256.png');

    console.log('\n✨ All icons generated successfully!');
    console.log('\nNote: For .icns (macOS) and .ico (Windows) files, you\'ll need to use:');
    console.log('- macOS: iconutil (built-in)');
    console.log('- Windows: electron-builder will handle .ico creation');
  } catch (error) {
    console.error('Error generating icons:', error);
    process.exit(1);
  }
}

generateIcons();
