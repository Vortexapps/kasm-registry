/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Gaming Registry',
    description: 'Tons of games',
    icon: 'https://icons.veryicon.com/png/o/miscellaneous/alan-ui/logo-game-controller-2.png',
    listUrl: 'https://vortexapps.github.io/kasm-registry/',
    contactUrl: 'https://github.com/vortexapps/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
