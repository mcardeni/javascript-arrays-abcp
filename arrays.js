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
return [...array, element];
}

function destructivelyAddElementToEndOfArray (array,element) {
array.push(element);
return array;
}

function accessElementInArray (array,index) {
return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray (array,element) {
array.shift();
return array;
}

function removeElementFromBeginningOfArray (array) {
array1 = array.slice(1)
return array1
}

function removeElementFromEndOfArray (array) {
return array.pop();
}
