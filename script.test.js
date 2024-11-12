// script.test.js

const { addNumbers } = require('./script'); // Adjust the path as needed

test('adds 3 + 5 to equal 8', () => {
    expect(addNumbers(3, 5)).toBe(10);
});

test('adds -2 + 2 to equal 0', () => {
    expect(addNumbers(-2, 2)).toBe(0);
});

test('adds 0 + 0 to equal 0', () => {
    expect(addNumbers(0, 0)).toBe(0);
});
