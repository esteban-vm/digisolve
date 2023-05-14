const repo = 'digisolve'
const basePath = `/${repo}`
const assetPrefix = `/${repo}/`

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: basePath,
  assetPrefix: assetPrefix,
}

module.exports = nextConfig
