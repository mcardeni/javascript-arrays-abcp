var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
var cities = ["New York", "San Francisco"]

function addElementToBeginningOfArray (array,element) {
return [element, ...array];
}
function destructivelyRemoveElementToBeginningOfArray(array,element){ 
  var array1 = array
  array.slice(element);
  return array;
}
function addElementToEndOfArray (array,element) {
return [...array, element];
}

function destructivelyAddElementToEndOfArray(array,element){ 
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  var array1 = array
  return array1[index];
}