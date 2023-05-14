/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export const content = [
  "./components/**/*.{js,vue,ts}",
  "./layouts/**/*.vue",
  "./pages/**/*.vue",
  "./plugins/**/*.{js,ts}",
  "./nuxt.config.{js,ts}",
]
export const theme = {
  extend: {
    colors: {
      'primary': {
        100: '#F0E6D2',
        200: '#C8AA6E',
        300: '#C89B3C',
        400: '#42331A',
        500: '#463714',
        600: '#32281E',
      },
      'grey': {
        100: '',
        200: '#5B5A56',
        300: '#3C3C41',
        400: '#1E2328',
        500: '#5B5A56',
        600: '#0E0F0F',
      },
      // 'primary': {
      //   100: '#F0E6D2',
      //   200: '#C8AA6E',
      //   300: '#C89B3C',
      //   400: '#42331A',
      //   500: '#463714',
      //   600: '#32281E',
      // },
      darkblue:'#1DA5B4',
      // grey: colors.zinc
    },
    fontFamily: {
      sans: ['Beaufort for LOL Font', 'sans-serif'],
    },
  }
}
export const plugins = [require('@tailwindcss/forms')]

