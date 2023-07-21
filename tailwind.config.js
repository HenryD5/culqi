/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary : '#111827',
        secondary: '#040315',
        tertiary: '#27A376',
        'gray-light': '#A0AEC0',
        'gray-extra-light': '#E9EAEC',
        success: '#0CAF60',
        failed: '#E03137',
        fund: '#FAFAFA',
        'gray-mediun': '#687588',
      },
      width: {
        '70': '17.5rem',
        '120': '30rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

