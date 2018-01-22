var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
var cities = ["New York", "San Francisco"]

function addElementToBeginningOfArray (array,element) {
return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray (array,element) {
var array1 = array
array1.unshift(element)
return;
}