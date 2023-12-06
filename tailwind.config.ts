import type { Config } from 'tailwindcss'

const expandColors = {
  base: {
    light: '#fff',
    dark: '#000'
  },
  primary: {
    main: '#ff8057',
    beta: '#333'
  },
  secondary: {
    main: '#666', // paragraphs
    beta: '#2558AB'
  },
  alpha: {
    gray: '#3f3f3f',
    black: '#000',
  },
  'light-main': "#ff8057",
  // 'light': {
  //   main: '#ff8057',
  //   beta: '#333',
  // },
  gray: {
    main: '#ff8057',
    beta: '#333',
  },
  green: {
    main: '#22c55e',
    beta: '#333',
  },
  orange: {
    main: '#ff8057',
    beta: '#333',
  },
}

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/elements/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: expandColors,
      borderColor: expandColors,
      textColor: expandColors,
    },
  },
  darkMode: 'class',
  plugins: [],
}
export default config
