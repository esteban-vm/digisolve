const isGithubActions = process.env.GITHUB_ACTIONS || false

let path = ''
let prefix = '/'
let images = undefined

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  path = `/${repo}`
  prefix = `/${repo}/`
  images = { loader: 'cloudinary', path: 'https://res.cloudinary.com/devm5dl9j/image/upload' }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: path,
  assetPrefix: prefix,
  images: images,
}

module.exports = nextConfig
