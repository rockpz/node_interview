'use strict';

let {name, data} = require('./a')

console.log('name is ', name)
console.log('data is ', data)

data.c = 666

console.log('data is ', data)

const a = require('./a')

console.log(a.getCount())

console.log(a.addCount())

console.log(a.getCount())

console.log('a.name is ', a.data)
