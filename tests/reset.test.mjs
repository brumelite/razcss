import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const file = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('distribution match source', async () => {
  const src = await file('src/reset.css');
  assert.equal(await file('dist/reset.css'), src);
});

test('reset contains essential rules without disabling keyboard focus', async () => {
  const css = await file('src/reset.css');
  assert.match(css, /box-sizing:\s*border-box/);
  assert.match(css, /max-width:\s*100%/);
  assert.match(css, /font:\s*inherit/);
  assert.doesNotMatch(css, /outline:\s*(?:none|0)\s*[;}]/);
  assert.doesNotMatch(css, /!important/);
});

test('package defines the publishable asset', async () => {
  const pkg = JSON.parse(await file('package.json'));
  assert.equal(pkg.name, '@brumelite/razcss');
  assert.equal(pkg.style, 'dist/reset.css');
  assert.ok(pkg.files.includes('dist/reset.css'));
});
