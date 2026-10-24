import { copyFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
const root = resolve(import.meta.dirname, '..');
const source = resolve(root, 'src/reset.css');
for (const destination of ['dist/reset.css']) {
  const file = resolve(root, destination);
  await mkdir(resolve(file, '..'), { recursive: true });
  await copyFile(source, file);
}
console.log('Built dist/reset.css');
