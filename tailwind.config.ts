import type { Config } from 'tailwindcss';
import FormKitVariants from '@formkit/themes/tailwindcss';

export default <Partial<Config>>{
  content: [
    './formkit/tailwind-theme.js',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.{vue,js,ts}',
  ],

  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c8d2fd',
          300: '#a6b5fb',
          400: '#828cf7',
          500: '#7577f1',
          600: '#5248e3',
          700: '#453ac8',
          800: '#3931a2',
          900: '#322f80',
          950: '#1e1c4a',
        },
        secondary: {
          50: '#edfff7',
          100: '#d5ffee',
          200: '#aeffde',
          300: '#70ffc5',
          400: '#2bfda5',
          500: '#00ff95',
          600: '#00c06c',
          700: '#009657',
          800: '#067548',
          900: '#07603d',
          950: '#003721',
        },
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      backgroundSize: {
        '200%': '200%',
      },
    },
  },
  variants: {
    extend: {
      textColor: ['active'],
      backgroundColor: ['active', 'group-hover'],
      scale: ['group-hover'],
      ringColor: ['hover', 'group-hover'],
      borderWidth: ['hover', 'group-hover'],
      margin: ['hover', 'group-hover'],
    },
  },
  plugins: [FormKitVariants],
};
