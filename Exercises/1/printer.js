'use strict';
// - Create a function called `printer`
//   which logs to the console the input parameters
//   (can have multiple number of arguments)

function printer(...args) {
      console.log(args)
}

printer(1,2,3,4,'hello');
