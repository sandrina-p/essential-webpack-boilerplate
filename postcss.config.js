module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-cssnext')({
            features: {
                calc: { preserve: true }, // it will not try to convert calc() on minify
                rem: false, // it will not add fallback from rem to px
            },
        }),
    ]
};
