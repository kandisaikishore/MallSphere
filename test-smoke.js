const fs = require('node:fs');
const assert = require('node:assert/strict');
const html = fs.readFileSync('index.html', 'utf8');
const js = fs.readFileSync('app.js', 'utf8');
const css = fs.readFileSync('styles.css', 'utf8');
const requiredIds = ['nav','sidebar','mobileMenu','globalSearch','breadcrumbPage','pageContent','toastRegion','modalRoot','helpBtn','helpTop','notificationsBtn'];
for (const id of requiredIds) assert.match(html, new RegExp('id=["\\']' + id + '["\\']'), 'HTML is missing required element #' + id);
for (const page of ['overview','tenants','leasing','finance','maintenance','events','footfall','parking','vendors','security','reports','settings']) {
  assert.match(html, new RegExp('data-page=["\\']' + page + '["\\']'), 'Missing navigation page: ' + page);
}
for (const feature of ['localStorage','structuredClone','data-edit','data-delete','exportCSV','recordForm','statusFilter','confirm(','createObjectURL','aria-current']) {
  assert.ok(js.includes(feature), 'Missing expected app behavior: ' + feature);
}
for (const stale of ['pending initial repository content sync','not available in this initial compatibility-safe build']) {
  assert.ok(!js.includes(stale) && !css.includes(stale), 'Found placeholder content: ' + stale);
}
assert.ok(css.length > 3000, 'Stylesheet is missing or incomplete');
assert.match(css, /@media\s*\(max-width:\s*760px\)/, 'Missing mobile responsive breakpoint');
assert.match(css, /prefers-reduced-motion/, 'Missing reduced-motion support');
assert.ok(fs.existsSync('README.md'), 'Missing README');
assert.ok(fs.existsSync('docs/PRD.md'), 'Missing PRD');
assert.ok(fs.existsSync('docs/ARCHITECTURE.md'), 'Missing architecture doc');
console.log('MallSphere static smoke tests passed');
