const mixins = require('./../src/styles/mixins');

const mock = {
    replaceWith: jest.fn(),
};

test('padding generates with small size', () => {
    expect(mixins.padding(mock, 'sm')).toMatchSnapshot();
});
