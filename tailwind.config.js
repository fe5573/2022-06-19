const px0To10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) }
const px0To100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) }
const px0To200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) }
const px0To2000 = { ...Array.from(Array(2001)).map((_, i) => `${i}px`) }

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      gray: {
        100: 'rgba(58, 58, 58, 0.7)',
        200: 'rgba(58, 58, 58, 0.8)',
      },
      black: {
        100: 'rgb(58, 58, 58)',
      },
      white: {
        100: 'rgb(204, 204, 204)',
        900: 'rgb(255, 255, 255)',
      },
    },
    extend: {
      width: px0To2000,
      height: px0To2000,
      minWidth: px0To2000,
      minHeight: px0To2000,
      borderWidth: px0To10,
      fontSize: px0To100,
      lineHeight: px0To100,
      spacing: px0To200,
      margin: px0To200,
    },
  },
}
