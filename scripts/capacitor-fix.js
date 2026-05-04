const fs = require('fs');
const path = require('path');

const defaultLocale = 'de';
const src = path.join('out', defaultLocale, 'index.html');
const dest = path.join('out', 'index.html');

if (!fs.existsSync(dest)) {
  fs.copyFileSync(src, dest);
  console.log('index.html copied to out/');
}