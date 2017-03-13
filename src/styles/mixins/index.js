// PostCSS is needed to make this work
const postcss = require('postcss');

// import postcss from 'postcss'; // it throws an error. reserved word.

const paddingSizes = {
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
}
const mixins = {
    padding(mixin, size) {
        return {
            padding: paddingSizes[size],
        }
    }
};

module.exports = mixins;
