const isGithubActions = process.env.GITHUB_ACTIONS || false

let path = ''
let prefix = '/'
let imageSource = undefined

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  path = `/${repo}`
  prefix = `/${repo}/`
  imageSource = { loader: 'custom', loaderFile: './image-loader.js' }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: path,
  assetPrefix: prefix,
  images: imageSource,
}

module.exports = nextConfig
