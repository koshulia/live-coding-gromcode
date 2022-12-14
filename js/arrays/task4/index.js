//input: arr, callback
//output: arr

//callback
//input: el, index, arr
// output: bool

//algo
//0. create result arr
//1. iterate arr - loop
//2. call callback for each el
//3. if callback - true => push el
//4. after iteration return res arr

const filterArrayElements = (arr, callback) => {
  const resultArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    const el = arr[index];
    if (callback(el, index, arr)) {
      resultArr.push(el);
    }
  }
  return resultArr;
};

//testing - test data

const filterArray = (el, index, arr) => {
  if (el > 2) return true;
  return false;
};

const func = (el, index, arr) => index > 2 && el > 5;

const testArr = [1, 3, 6, -7, 435, 8];
console.log(filterArrayElements(testArr, filterArray));
console.log(filterArrayElements(testArr, func));
console.log(
  filterArrayElements(['Andrew', 'Ivan', 'Jack', 'Jane', 'Mortal'], (el) =>
    el.toLowerCase().includes('an')
  )
);

const mapArrayElements = (arr, callback) => {
  let resultArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    const el = arr[index];
    resultArr.push(callback(el, index, arr));
  }
  return resultArr;
};

const mapArray = (el, index, arr) => el ** 2;

console.log(mapArrayElements(testArr, mapArray));
