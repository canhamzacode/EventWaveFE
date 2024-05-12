import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#800000',
        heroBg: 'var(--color-heroBg)',
        lightGrey: '#FEFEFE',
        lightPrimary: '#B56B6B',
        darkGrey: '#1C1C1C',
        text: '#3B3B3B',
        dark: '#1C1C1C'
      },
      screens: {
        tablet: '970px'
      }
    }
  },
  plugins: []
};
export default config;
