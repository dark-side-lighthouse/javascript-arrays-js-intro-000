var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(array,element) {
  array = [element, ...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  var array;
  array.unshift(element);
  return array
}

function addElementToEndOfArray(array,element) {
  array = [...array, element];
  return array;
}

function destructivelyAddElementToEndOfArray(array,element) {
  var array;
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  var array;
  return(array[index]);
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  var array;
  return array.slice(1);
  return array;
}
