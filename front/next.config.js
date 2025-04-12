/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://cdnjs.cloudflare.com;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              img-src 'self' data: https:;
              font-src 'self' https://fonts.gstatic.com;
              connect-src 'self' https://api.side-palette.com;
              frame-src 'self' https://vercel.live;
              worker-src 'self' blob:;
            `.replace(/\s+/g, ' ').trim()
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
