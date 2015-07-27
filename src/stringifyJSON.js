// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

//check if obj is array
  if (Array.isArray(obj)) {

    //declare output Array
    var resultArray = [];

    //iterates over all items in the array
    for ( var i = 0; i < obj.length; i++ ) {

      //recurses stringifyJSON over obj[i] & pushes into output Array
      resultArray.push( stringifyJSON(obj[i]) );
    }
    //resultArray.join "joins all emenets of an array into a string"
    return '[' + resultArray.join(',') + ']';
  }



  if (typeof obj === 'object' && !(Array.isArray(obj)) && obj !== null) {

    var resultArray = [];

    for (var key in obj) {

      if ( obj[key] === undefined ||  typeof obj[key] === 'function') {
        continue;
      }

      resultArray.push( stringifyJSON(key) + ':' + stringifyJSON(obj[key]) );

    }
    return '{' + resultArray.join(',') + '}'
  }

    //case 1: strings, numbers, boolean
   if (typeof obj === 'string') {
     return '"'+obj+'"';
   }

   //stringifies numbers and booleans using type-coercion
  return '' + obj;

    // case 2: null
   if (typeof obj === null) {
     return 'null';
   }

    // case 3: undefined and functions


    // case 5: objects

  //check if obj is object




  };














