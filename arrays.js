var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
var cities = ["New York", "San Francisco"]

function addElementToBeginningOfArray (array,element) {
return [element, ...array];
}