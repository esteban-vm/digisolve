const isGithubActions = process.env.GITHUB_ACTIONS || false

let path = ''
let prefix = '/'
let images

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  path = `/${repo}`
  prefix = `/${repo}/`
  images = { loader: 'imgix', path: 'esteban-vm.imgix.net' }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: path,
  assetPrefix: prefix,
  images: images,
}

module.exports = nextConfig
