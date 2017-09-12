'use strict';
// - Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// - Log the sum of the elements in `ai` to the console

var ai = [3, 4, 5, 6, 7];
var result = ai.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});

console.log(result);
