import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
    mode: "jit",
    content: ['./packages/**/*.{js,jsx,ts,tsx}'],
    theme: {
      fontSize: {
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        24: '24px',
        30: '30px',
        36: '36px',
        48: '48px',
        64: '64px',
      },
      extend: {
        transitionProperty: {
          height: 'height',
          width: 'width',
          transform: 'transform'
        },
        fontFamily: {
          sans: ['Nunito', 'sans-serif']
        },
        colors: {
          'top-main': 'rgb(255, 246, 239)',
          'primary-blue': 'rgb(1,172,216)',
          'primary-blue-hover': 'rgb(0, 183, 250)',
          'secondary-blue': 'rgb(0, 134, 168)',
          'secondary-blue-hover': 'rgb(0, 159, 200)',
          'primary-green': 'rgb(0, 128, 113)',
          'primary-green-hover': 'rgb(5, 175, 156)',
          'primary-orange-hover': 'rgb(246, 170, 85)',
          'primary-orange': 'rgb(234, 138, 40)',
          'secondary-orange': 'rgb(246, 119, 77)'
        },
      }
    },
    variants: {
      width: ['responsive', 'hover', 'focus']
    },
    plugins: [require('@tailwindcss/forms')]
  };