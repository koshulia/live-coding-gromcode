const numbersList1 = [1, 2, 3, 77, 5];

//input: none
//output: number

console.log('BEFORE POP', numbersList1);
const popRes = numbersList1.pop();
console.log(popRes);

console.log('AFTER POP', numbersList1);

//
// input: number (any type)
// output: number (new length)
const numbersList2 = [1, 2, 3, 4, 5];
console.log('BEFORE PUSH', numbersList2);

const pushRes = numbersList2.push('hello');
console.log(pushRes);

console.log('AFTER PUSH', numbersList2);

//
// input: number (any type)
// output: number (new length)

const numbersList3 = [1, 2, 3, 4, 5];

console.log('BEFORE UNSHIFT', numbersList3);

const unshiftRes = numbersList3.unshift(777);
console.log(unshiftRes);

console.log('AFTER UNSHIFT', numbersList3);

//input: callback
//output: array

//callback
//input: el,index,array
//output: bool

const anotherNumbersList = [5, 7, 1, 220, -6, 40];

// function filterCallback(el) {
//   return el > 5;
// }

// const filterRes = anotherNumbersList.filter(filterCallback);

const filterRes = anotherNumbersList.filter((el) => el > 100);

console.log(filterRes);
