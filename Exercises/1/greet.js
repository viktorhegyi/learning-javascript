'use strict';
// - Create variable named `al` and assign the value `Greenfox` to it
// - Create a function called `greet` that greets it's input parameter
//     - Greeting is printing e.g. `Greetings, dear Greenfox`
//     - Prepare for the special case when no parameters are given
// - Greet `al`

var al = "Greenfox";

function greet(a) {
  if (a == null) {
    console.log("Greetings, stranger");
  } else {
    console.log("Greetings, dear " + a);
  }
}

greet(al);
