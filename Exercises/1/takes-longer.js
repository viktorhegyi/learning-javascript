'use strict';
// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"

var quote = "Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law."

var index = quote.indexOf('It');
var quoteFirsthalf = quote.slice(0, quote.indexOf('It') + 2);
var quoteSecondhelf = quote.slice(quote.indexOf('It') + 2, quote.length);
var adding = " always takes longer than";

var newquote = quoteFirsthalf.concat(adding, quoteSecondhelf);

console.log(newquote);
