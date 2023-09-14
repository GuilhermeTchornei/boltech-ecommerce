import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'red': '#A4161A',
        'dark-red': '#660708',
        'light-red': '#E5383B',
        'blue': '#161A1D',
        'dark-blue': '#0B090A',
        'gray': '#D3D3D3',
        'dark-gray': '#B1A7A6',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      maxWidth: {
        max: '1480px',
      },
      keyframes: {
        'fade': {
          '0%': { opacity: '0' },
          '100%': { opacity: '100'}
        }
      },
      animation: {
        'fade-in': 'fade 100ms ease-in-out',
      },
    },
  },
  plugins: [],
}
export default config
