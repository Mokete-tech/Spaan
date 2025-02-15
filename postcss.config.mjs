/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production'
      ? {
          cssnano: {
            preset: ['default', { discardComments: { removeAll: true } }],
          },
        }
      : {}),
  },
};

export default config;
npm install -D postcss autoprefixer cssnano
import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
@tailwind base;
@tailwind components;
@tailwind utilities;
npm run dev
{
  "scripts": {
    "css:debug": "postcss src/styles/globals.css -o debug.css"
  }
}
{
  "scripts": {
    "css:debug": "postcss src/styles/globals.css -o debug.css"
  }
}
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;
