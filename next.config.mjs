/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    webpackBuildWorker: true,
    serverActions: true,
  },
}

// Simplified merge function
const mergeUserConfig = async () => {
  try {
    const { default: userConfig } = await import('./v0-user-next.config')
    return {
      ...nextConfig,
      ...userConfig,
      // Merge nested objects
      ...Object.keys(userConfig).reduce((acc, key) => {
        if (typeof nextConfig[key] === 'object' && !Array.isArray(nextConfig[key])) {
          acc[key] = {
            ...nextConfig[key],
            ...userConfig[key],
          }
        }
        return acc
      }, {}),
    }
  } catch (e) {
    return nextConfig
  }
}

export default await mergeUserConfig()
/** @type {import('next').NextConfig} */
const userConfig = {
  // Your custom configurations here
  // Example:
  // reactStrictMode: true,
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   // Custom webpack config
  //   return config
  // },
}

export default userConfig
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
npm run dev
/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... existing config
  
  // For better performance
  swcMinify: true,
  
  // If you need to redirect or rewrite URLs
  async redirects() {
    return []
  },
  
  // For custom headers
  async headers() {
    return []
  },
  
  // For environment variables
  env: {
    // your env variables
  },
  
  // For webpack optimization
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Custom webpack config
    return config
  },
}
let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
}

mergeConfig(nextConfig, userConfig)

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      }
    } else {
      nextConfig[key] = userConfig[key]
    }
  }
}

export default nextConfig
