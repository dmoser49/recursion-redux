// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

//Returns an array-like object of all child elements which have all of the given class names.
//When called on the document object, the complete document is searched, including the root node.
var getElementsByClassName = function(className){

  //returns array-like object
  var returnArray = [];

  node = node || document.body;

//check if node has className
  if ( node === className ) {

    //if yes, push into returnArray
    returnArray.push(node);
  }



//if not, (don't?)


};
