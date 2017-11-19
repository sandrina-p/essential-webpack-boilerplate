module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-cssnext')({
      features: {
        rem: false, // it will not add fallback from rem to px
      },
    }),
  ]
};
