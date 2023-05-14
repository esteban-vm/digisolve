const isGithubActions = process.env.GITHUB_ACTIONS || false

let path = ''
let prefix = '/'

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  path = `/${repo}`
  prefix = `/${repo}`
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: path,
  assetPrefix: prefix,
}

module.exports = nextConfig
