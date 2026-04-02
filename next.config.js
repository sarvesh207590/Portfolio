/** @type {import('next').NextConfig} */
const nextConfig = {
    allowedDevOrigins: ['192.168.60.114'],
    images: {
        domains: ['github-profile-summary-cards.vercel.app', 'leetcard.jacoblin.cool', 'skillicons.dev'],
    },
}

module.exports = nextConfig
