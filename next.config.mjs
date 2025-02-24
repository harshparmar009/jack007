/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    // trailingSlash: true,
    output: 'export',
    images: { unoptimized: true },
    eslint: {
      ignoreDuringBuilds: true, // This will skip ESLint checks during production builds
    },
   
    
   
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,
   
    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,
   
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
  }
  
  export default nextConfig