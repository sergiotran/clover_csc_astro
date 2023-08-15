/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        "sans": ['Quicksand', 'sans-serif']
      },
      container: {
        center: true,
        screens: {
          sm: '600px',
          md: '728px',
          lg: '960px',
        },
      }
    },
  },
  plugins: [],
}
