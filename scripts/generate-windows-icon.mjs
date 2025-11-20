import png2icons from 'png2icons';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const buildDir = join(__dirname, '../build');
const pngPath = join(buildDir, 'icon.png');
const icoPath = join(buildDir, 'icon.ico');

try {
  const input = readFileSync(pngPath);
  const output = png2icons.createICO(input, png2icons.BILINEAR, 0, false);
  writeFileSync(icoPath, output);
  console.log('✓ Generated icon.ico');
} catch (error) {
  console.error('Error generating .ico:', error);
  process.exit(1);
}
