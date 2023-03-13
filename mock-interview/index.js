// function test() {
//   console.log(this);
// }

// test();

// //
// const obj = {};
// const b = test.bind(obj);
// console.log(b());

const arr = [1, 5, 10, 4, 7, -1];

const arrSorted = arr.slice().sort((a, b) => a - b);
console.log(arrSorted);

const users = [
  {
    id: 100,
    dateRegistered: new Date(),
    email: 'test@gmail.com',
    isActive: true,
  },
  {
    id: 101,
    dateRegistered: new Date(),
    email: 'test111@gmail.com',
    isActive: false,
  },
  {
    id: 102,
    dateRegistered: new Date(),
    email: 'test@gmail.com',
    isActive: true,
  },
  {
    id: 103,
    dateRegistered: new Date(),
    email: 'test111@gmail.com',
    isActive: false,
  },
];

const sortedUsers = users
  .filter(({ isActive }) => isActive)
  .sort((a, b) => b.dateRegistered - a.dateRegistered);
console.log(sortedUsers);

function hi() {
  return;
  {
    id: 1;
  }
}
console.log(hi());
