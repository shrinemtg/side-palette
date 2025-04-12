/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  optimizeFonts: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdnjs.cloudflare.com https://vercel.live https://side-palette.vercel.app https://side-palette-git-develop-ub-mtg.vercel.app https://www.side-palette.com;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              img-src 'self' data: https: blob:;
              font-src 'self' https://fonts.gstatic.com;
              connect-src 'self' https://api.side-palette.com https://side-palette.vercel.app https://side-palette-git-develop-ub-mtg.vercel.app https://www.side-palette.com wss://side-palette.vercel.app wss://side-palette-git-develop-ub-mtg.vercel.app;
              frame-src 'self' https://vercel.live https://side-palette.vercel.app https://side-palette-git-develop-ub-mtg.vercel.app https://www.side-palette.com;
              worker-src 'self' blob:;
              manifest-src 'self';
              base-uri 'self';
              form-action 'self';
            `.replace(/\s+/g, ' ').trim()
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
