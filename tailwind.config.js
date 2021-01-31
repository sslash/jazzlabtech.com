module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './molecules/**/*.{js,ts,jsx,tsx}'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    fontFamily: {
      "display" : ["Noto Sans","sans-serif"],
      "body" : ["Noto Sans","sans-serif"],
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
