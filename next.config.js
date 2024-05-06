/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    API_KEY: process.env.API_KEY,
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
    BASE_URL: process.env.BASE_URL
  }
}

module.exports = nextConfig
