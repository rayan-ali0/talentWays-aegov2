/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  future: {
    hoverOnlyWhenSupported: false,
  },
  theme: {
    extend: {
        screens: {
        'xs': '500px' , 
      },
    },
  },
  plugins: [
    require('@aegov/design-system'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),

  ],
   variants: {
    scrollbar: ['rounded'],
  }
}


// import type { Config } from 'tailwindcss';
// import designSystem from '@aegov/design-system';
// import typography from '@tailwindcss/typography';
// import forms from '@tailwindcss/forms';
// import scrollbar from 'tailwind-scrollbar';
 
// const config: Config = {
//   content: [
//     './index.html',
//     './src/**/*.{js,ts,jsx,tsx}',
//   ],
//   future: {
//     hoverOnlyWhenSupported: false,
//   },
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     designSystem,
//     typography,
//     forms,
//     scrollbar,
//   ],
// };
 
// export default config;