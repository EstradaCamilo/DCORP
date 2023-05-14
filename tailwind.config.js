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
      // 'primary': {
      //   100: '#F0E6D2',
      //   200: '#C8AA6E',
      //   300: '#C89B3C',
      //   400: '#42331A',
      //   500: '#463714',
      //   600: '#32281E',
      // },
      darkblue:'#1DA5B4',
      grey:'#111111'
      // grey: colors.zinc
    },
    fontFamily: {
      sans: ['Beaufort for LOL Font', 'sans-serif'],
    },
  }
}
export const plugins = [require('@tailwindcss/forms')]

