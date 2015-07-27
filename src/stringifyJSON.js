// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //case 1: strings, numbers, boolean



  // case 2: null
 if (typeof obj === null) {
   return 'null';
 }


  // case 3: undefined and functions



  // case 4: arrays



  // case 5: objects





};
