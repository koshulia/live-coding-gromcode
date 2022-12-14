/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

//create obj
//read
//modify obj = add/update/mapping

//V1
function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

//V2
//assign
//input: target,sourceObj...n
//output: new obj

function addPropertyV2(obj, key, value) {
  return Object.assign(obj, { [key]: value });
}

//V3

function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

//V4
function addPropertyV4(obj, key, value) {
  return { ...obj, [key]: value };
}

// test data
const transaction = {
  value: 170,
};
console.log(addPropertyV3(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }

const user = {
  name: 'Jane',
};
console.log(addPropertyV3(user, 'surName', 'Doe'));
console.log(
  addPropertyV3(
    {
      name: 'Jane',
    },
    'name',
    'John'
  )
);

console.log(transaction);
console.log(user);
