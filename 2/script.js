const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Pop-Custom

function popCustom(array) {
  const lastObject = array[array.length - 1];
  array.length -= 1;
  return lastObject;
}

console.log(popCustom(numbersArray));
console.log(numbersArray);

//Push-Custom

function pushCustom(array, item) {
  array.length += 1;
  array[array.length - 1] = item;
  return array.length;
}

console.log(pushCustom(numbersArray, 10));
console.log(numbersArray);

//Shift-Custom

function shiftCustom(array) {
  const firstObject = array[0];
  for (let i = 1; i < array.length; i++) {
    array[i - 1] = array[i];
  }
  array.length -= 1;
  return firstObject;
}

console.log(shiftCustom(numbersArray));
console.log(numbersArray);

//UnShift-Custom

function unshiftCustom(array, item) {
  const oldLength = array.length;
  array.length += 1;
  for (let i = oldLength; i > 0; i--) {
    array[i] = array[i - 1];
  }
  array[0] = item;
  return array.length;
}

console.log(unshiftCustom(numbersArray, 0));
console.log(numbersArray);

//At-Custom

function atCustom(array, index) {
  if (index >= 0) {
    return array[index];
  } else return array[array.length + index];
}

console.log(atCustom(numbersArray, -1));

//Reverse-Custom

function reverseCustom(array) {
  let start = 0;
  let end = array.length - 1;
  let oldValue;

  while (start < end) {
    oldValue = array[start];
    array[start] = array[end];
    array[end] = oldValue;
    start++;
    end--;
  }
  return array;
}

console.log(reverseCustom(numbersArray));

//Includes-Custom

function includesCustom(array, item) {
  let isIncludes = false;
  for (let i = 0; i < array.length; i++) {
    if (item === array[i]) {
      isIncludes = true;
    }
  }
  return isIncludes;
}

console.log(includesCustom(numbersArray, 0));

//Reduce-Custom

function reduceCustom(array, accumulator) {
  for (let i = 0; i < array.length; i++) {
    accumulator += array[i];
  }
  return accumulator;
}

console.log(reduceCustom(numbersArray, 0));

//Custom-Join

function customJoin(array, separator = ",") {
  let result = array[0].toString();
  for (let i = 1; i < array.length; i++) {
    result += separator + array[i].toString();
  }
  return result;
}

console.log(customJoin(numbersArray));

//Custom-Concat
const numbersArray2 = [55, 39, 21, 45];

function customConcat(array1, array2) {
  let concatArray = [];
  concatArray.length = array1.length + array2.length;
  for (let i = 0; i < array1.length; i++) {
    concatArray[i] = array1[i];
  }

  let index1 = array1.length; 
  let index2 = 0;
  while(index1<concatArray.length){
    concatArray[index1] = array2[index2];
    index1++;
    index2++;
  }
  return concatArray;
}

console.log(customConcat(numbersArray,numbersArray2));
