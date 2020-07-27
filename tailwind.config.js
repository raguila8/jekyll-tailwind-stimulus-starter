module.exports = {
  purge: [
    './*.html',
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './_src/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ],
}
