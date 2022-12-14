'use strict';

/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */

//algo
//1. create empty obj
//2. iterate keysList
//3. add key/value to the obj
//4. return obj

//DRAFT
function buildObject(keysList, valuesList) {
  const obj = {};
  for (let index = 0; index < keysList.length; index += 1) {
    obj[keysList[index]] = valuesList[index];
  }
  return obj;
}

//FINAL
function buildObject(keysList, valuesList) {
  return keysList.reduce(
    (obj, key, index) => ({ ...obj, [key]: valuesList[index] }),
    {}
  );
}

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
console.log(result);

const keys1 = ['name', 'address', 'age', 'name'];
const values1 = ['Bob', 'Ukraine', 34, 'John'];
const result1 = buildObject(keys1, values1); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
console.log(result1);

const keys2 = ['name', 'address', 'age', 'city name'];
const values2 = ['Bob', 'Ukraine', 34, 'New York'];
const result2 = buildObject(keys2, values2); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
console.log(result2);

const keys3 = ['name', 'address', 'age', 'city name', 'start'];
const values3 = [
  'Bob',
  'Ukraine',
  34,
  'New York',
  () => {
    console.log('I am starting');
  },
];
const result3 = buildObject(keys3, values3); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
result3.start();
console.log(result3);

const keys4 = ['name', 'address', 'age', 'city name', 'transactions'];
const values4 = ['Bob', 'Ukraine', 34, 'New York', [4, 36, -64]];
const result4 = buildObject(keys4, values4); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
console.log(result4);
