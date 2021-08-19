// const plugin = require('tailwindcss/plugin');
// const colors = require('tailwindcss/colors')

module.exports = {
  plugins: [
    // plugin(function ({ addBase, theme }) {
    //   addBase({
    //     'h1': { fontSize: theme('fontSize.2xl') },
    //     'h2': { fontSize: theme('fontSize.xl') },
    //     'h3': { fontSize: theme('fontSize.lg') },
    //   })
    // })
  ],
  presets: [
    require('./my-global-presets')
  ],
  purge: {
    // enabled: true,
    enabled: false,
    content: ['./dist/**/*.html'],
  },
  darkMode: 'class', // or 'media' or 'class'
  // entirely disable any specific class
  corePlugins: {
    float: false
  },
  theme: {
    debugScreens: {
      position: ['top', 'left'],
    },
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   white: colors.white,
    //   black: colors.black,
    //   blue: colors.blue,
    //   yellow: colors.yellow,
    //   gray: colors.blueGray,
    //   turquoise: colors.cyan,
    //   green: colors.lime,
    //   red: colors.rose,
    // },
    // it works for only spacing-13, others spacing will not work then
    // spacing: {
    //   13: '3.25rem'
    // },
    extend: {
      // fontFamily: {
      //   headline: ['Oswald']
      // },
      // colors: {
      //   mainColor: '#1E293B'
      // },
      // spacing: {
      //   13: '3.25rem'
      // },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem',
        sm: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        "2xl": '4rem'
      }
    }
  },
  variants: {
    // only background color change for this array values(attribute)
    backgroundColor: ['dark', 'group-hover', 'focus-within', 'hover', 'focus'],
    extend: {
      // to change width for hover and focus
      width: ['hover', 'focus']
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ]
}
