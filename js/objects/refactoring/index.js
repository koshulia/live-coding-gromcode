'use strict';

// //GOOD
// function compareObjects(firstObj, secondObj) {
//   return Object.keys({ ...firstObj, ...secondObj }).every(key => firstObj[key] === secondObj[key]);
// }

// //NORM
// function compareObjects(firstObj, secondObj) {
//   return !Object.keys({ ...firstObj, ...secondObj }).some(key => firstObj[key] !== secondObj[key]);
// }

// //BAD
// function compareObjects(firstObj, secondObj) {
//   const biggerObj =
//     JSON.stringify(firstObj).length > JSON.stringify(secondObj).length ? firstObj : secondObj;
//   return !Object.keys(biggerObj).some(key => firstObj[key] !== secondObj[key]);
// }

// //NORM
// const compareObjects = (firstObj, secondObj) => {
//   const firstArr = Object.keys(firstObj);
//   const secondArr = Object.keys(secondObj);
//   if (firstArr.length !== secondArr.length) {
//     return false;
//   }
//   return !firstArr.some(key => firstObj[key] !== secondObj[key]);
// };
// //refactored
const compareObjects = (firstObj, secondObj) => {
  const firstObjKeys = Object.keys(firstObj);
  if (firstObjKeys.length !== Object.keys(secondObj).length) {
    return false;
  }
  return firstArr.every(key => firstObj[key] === secondObj[key]);
};

// //BAD
// const compareObjects2 = (firstObj, secondObj) =>
//   JSON.stringify(Object.entries(firstObj).sort()) ===
//   JSON.stringify(Object.entries(secondObj).sort());

// //BAD
// function compareObjects(firstObj, secondObj) {
//   const firstArray = Object.keys(firstObj);
//   if (firstArray.length !== Object.keys(secondObj).length) {
//     return false;
//   }
//   return firstArray.reduce((acc, key) => {
//     if (firstObj[key] !== secondObj[key]) {
//       acc = false;
//     }
//     return acc;
//   }, true);
// }

// //BAD
// const compareObjects = (firstObj, secondObj) =>
//   Object.keys(firstObj).reduce(
//     (acc, key, index) => (firstObj[key] === secondObj[key] && index === acc ? acc + 1 : -1),
//     0,
//   ) === Object.keys(secondObj).length;

// //BAD
// function compareObjects(firstObj, secondObj) {
//   const ordered = obj =>
//     Object.keys(obj)
//       .sort()
//       .reduce((acc, el) => {
//         acc[el] = obj[el];
//         console.log(acc);
//         return acc;
//       }, {});
//   const sortFirstObj = ordered(firstObj);
//   const sortSecondObj = ordered(secondObj);
//   return JSON.stringify(sortFirstObj) === JSON.stringify(sortSecondObj);
// }

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

const obj5 = {
  age: 17,
  name: 'Tom',
};

console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true
console.log(compareObjects(obj4, obj5)); // ==> true
