import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';

export default function nextConfig(phase) {
  const config = {
    distDir: process.env.ACT_BUILD_DIR || '.next',
    images: { unoptimized: true },
  };

  // The hosts resolve the exported index file at /sat. Next dev serves it by filename.
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...config,
      async rewrites() {
        return [{ source: '/sat', destination: '/sat/index.html' }];
      },
    };
  }

  return { ...config, output: 'export' };
}
