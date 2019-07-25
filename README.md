# mynpk
My node package for string operation:+1:

## References:-
Courtesy and Reference: [Fee Code Camp ->Node Package, Publish](https://www.freecodecamp.org/news/how-to-make-a-beautiful-tiny-npm-package-and-publish-it-2881d4307f78/).

Removes all spaces from a string.

Install

$ npm install @bamblehorse/tiny

Usage

const tiny = require("@bamblehorse/tiny");

 

tiny("So much space!");

//=> "Somuchspace!"

 

tiny(1337);

//=> Uncaught TypeError: Tiny wants a string!

//    at tiny (<anonymous>:2:41)

//    at <anonymous>:1:1
