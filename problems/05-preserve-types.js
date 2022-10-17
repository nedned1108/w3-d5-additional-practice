/***********************************************************************
Write a function called `preserveTypes` which takes in an array of elements
that could be of any type and returns a function. The return function should
accept any number of strings that could be any of the following types:

- 'object'
- 'number'
- 'string'
- 'boolean'
- 'undefined'

The return function should return a copy of the input array with only elements of the
specified types.

Examples:

const preserveFunc = preserveTypes([1, 'one', 2, 'two', 3, 'three']);
console.log(preserveFunc('number')); // prints [1, 2, 3]
console.log(preserveFunc('string')); // prints ['one', 'two', 'three']

const preserveFunc2 = preserveTypes([2, undefined, 'world', { color: 'red' }, true, 3, [4, 5], 'hello', false]);
console.log(preserveFunc2('number')); // prints [2, 3]
console.log(preserveFunc2('object')); // prints [ { color: 'red' }, [4, 5] ];
console.log(preserveFunc2('boolean', 'string', 'undefined')); // prints [ undefined, 'world', true, 'hello', false ]

*/
// 1. takes in an array of el (any type)
// 2. return a func
// 3. returned func should accept any number of strings of following
// 4. return a copy of the input array with only el of specified types

function preserveTypes(array) {
   return (...str) => {
         let res = array.filter((el) => {
             return str.includes(typeof(el))
         })
     return res
     }
}

const preserveFunc = preserveTypes([1, 'one', 2, 'two', 3, 'three']);
console.log(preserveFunc('number')); // prints [1, 2, 3]
console.log(preserveFunc('string')); // prints ['one', 'two', 'three']

// const preserveFunc2 = preserveTypes([2, undefined, 'world', { color: 'red' }, true, 3, [4, 5], 'hello', false]);
// console.log(preserveFunc2('number')); // prints [2, 3]
// console.log(preserveFunc2('object')); // prints [ { color: 'red' }, [4, 5] ];
// console.log(preserveFunc2('boolean', 'string', 'undefined')); // prints [ undefined, 'world', true, 'hello', false ]



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = preserveTypes;
} catch (e) {
    module.exports = null;
}
