'use strict';

const name = '456'

exports.name = '123';
exports.city = 'wuhan';

let count = 1;

const addCount = () => {
    count += 1;
    return count
}

const getCount = () => {
    return count
}

module.exports = {city: 'shenzhen', name: name, data: {c: 123}, addCount: addCount, getCount: getCount};
