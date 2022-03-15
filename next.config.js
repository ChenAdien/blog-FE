/** @type {import('next').NextConfig} */
const path = require('path')
module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.join(__dirname, 'components'),
    }
    return config
  },
}
