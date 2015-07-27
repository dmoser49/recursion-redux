// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

//Returns an array-like object of all child elements which have all of the given class names.
//When called on the document object, the complete document is searched, including the root node.
var getElementsByClassName = function(className, node){

  //returns array-like object
  var returnArray = [];


  var node = node || document.body;

//
  var parts = node.className.split(' ');

//Does this node contain the className argument?
  if(node.classList.contains(className)) {

      //if yes, push into returnArray
      returnArray.push(node);
    }

  //iterates through each child node
  for ( var i = 0; i < node.children.length; i++ ) {

    //recurses through each child node
    var results = getElementsByClassName( className, node.children[i] )

    //
    returnArray = returnArray.concat(results);

  }

//return array-like object
return returnArray;

};
