/* Dynamic Slice

    Write a function that accepts two numbers, and returns another function that accepts an array.
    The new function, when invoked, should return a copy of a portion of the array between the indices of
    the arguments passed to the first function. Like the built in Array#slice, it should include the 
		"start" index and exclude the "end" index. Do not use the built-in Array#slice method.

    If the start index is less than 0, the returned function should slice from the beginning of the array.
    Similarly if the end index is greater than the length of the array, the returned function should 
		slice up to the end of the array. See below for examples.

    const slicer = dynamicSlice(1, 3);
    console.log(slicer([0, 1, 2, 3])); // prints [ 1, 2 ]

    const slicer2 = dynamicSlice(2, 7);
    console.log(slicer2(['kittens', 'puppies', 'cats', 'dogs'])); // prints [ 'cats', 'dogs' ]

		const slicer3 = dynamicSlice(-10, 2);
    console.log(slicer3([99, 40, 131, 8])); // prints [ 99, 40 ]
*/
// 1. accept 2 number
// 2. return another func
// 3. returned func accept an array
// 4. when invoked, return a copy of a portion of arr betwen indices incl start, excl end.
// 5. if start < 0, return func slice from beginning of arr
function dynamicSlice(start, end, res = []) {
  debugger
  return function (array) {
    // let end = 0;
    // let count = 0;
    if (end > array.length) {
      end = array.length;
      let count = end - start;
      return array.splice(start, count)
    } else if (start < 0) {
      start = 0;
      let count = end - start;
      return array.splice(start, count)
    } else {
    let count = end - start;
    return array.splice(start, count)
    }
  }
}

// const slicer = dynamicSlice(1, 3);
// console.log(slicer([0, 1, 2, 3])); // prints [ 1, 2 ]

// const slicer2 = dynamicSlice(2, 7);
// console.log(slicer2(['kittens', 'puppies', 'cats', 'dogs'])); // prints [ 'cats', 'dogs' ]

// const slicer3 = dynamicSlice(-10, 2);
// console.log(slicer3([99, 40, 131, 8])); // prints [ 99, 40 ]
    
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = dynamicSlice;
} catch (e) {
    module.exports = null;
}
