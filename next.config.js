/** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         images.remotePatterns: [
//             {
//                 protocol: 'https',
//                 hostname: 'images.credly.com',
//             }
//         ]
//     }
// };
module.exports = {
    images: {
      domains: ['images.credly.com'],
    },
  }