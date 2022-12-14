//map
const numbersList = [5, 0, 8, 10, -4, 50, 220];

//input: callback, context
//output: array

//input: el, index(optional), array(optional)
//output: new element

const mapRes = numbersList.map((el) => (el > 0 ? el ** 2 : el));
console.log(mapRes);

//find

//input: callback
//output: element | undefined

const findRes = numbersList.find((el) => el > 100);
console.log(findRes);

//forEach

//input: callback
//output: undefined

//input: el, index(optional), array(optional)
//output: undefined

numbersList.forEach((el) => {
  if (el > 0) console.log(el);
});

//ternary
//condition ? a : b

// numbersList.forEach((el) =>
//   console.log((el > 0) ? (el) : 'Error');
// );

//reduce

const transactions = [5, 0, 8, 10, -4, -50, 220, 1203, 556, 41];

//input: callback, accInitValue(optional)
//output: result (any type)

//callback
//input: acc, el, index (optional), array(optional)
//output: result (any type)

transactions.reduce((acc, el) => {
  console.log('acc:' + acc);
  console.log('el:' + el);
  if (el < 0) acc += el;
  return acc;
}, 0);

const reduceRes = transactions.reduce(
  (acc, el) => (el < 0 ? (acc += el) : acc),
  0
);

console.log(reduceRes);
