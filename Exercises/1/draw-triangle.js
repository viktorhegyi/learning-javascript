'use strict';

var lineCount = 4;

// Write a program that draws a
// triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

for (var i = 0; i < lineCount; i++) {
  var output="";
  for (var k = 0; k <= i; k++) {
    output += "*";
    }
    console.log(output);
}
