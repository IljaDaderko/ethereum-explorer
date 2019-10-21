const withCSS = require('@zeit/next-css');
const withImages = require('next-images');

module.exports = withCSS(
  withImages({
    inlineImageLimit: 100000,
    dir: './src',
    outDir: 'dist'
  })
);
