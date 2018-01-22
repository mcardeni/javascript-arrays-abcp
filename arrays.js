var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
var cities = ["New York", "San Francisco"]

function addElementToBeginningOfArray (array,element) {
return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray (array,element) {
array.unshift(element);
return array;
}

function addElementToEndOfArray (array,element) {
return [array, ...element];
}