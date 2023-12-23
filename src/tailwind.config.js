/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      default: ["Jost", "sans-serif"],
    },
    colors: {
      'blue': '#62CBC9',
      'grey': '#B1B3B5',
      'black': '#1A1A1A',
      'white': '#FFFFFF',
    },
    extend: {},
  },
  plugins: [],
}

