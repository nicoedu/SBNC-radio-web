/* eslint-disable */
const withOptimizedImages = require('next-optimized-images')

module.exports = withOptimizedImages({
  defaultImageLoader: 'responsive-loader',
  target: 'serverless'
})
