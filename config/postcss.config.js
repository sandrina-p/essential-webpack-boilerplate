module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-extend'),
        require('postcss-cssnext')({
            features: {
                rem: false, // it will not add fallback from rem to px
            },
        }),
    ]
};
