/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',

    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,

    skipTrailingSlashRedirect: true,

    distDir: 'dist',
    images: {
        unoptimized: true
    }
}

module.exports = nextConfig
