function getSenseOfLife() {
  return 42;
}

const res = getSenseOfLife();
console.log(res);

console.log(getSenseOfLife());

function getSquared(num) {
  return num * num;
}

console.log(getSquared(5));
console.log(getSquared(0));
console.log(getSquared(-7));

function sum(a, b) {
  return a + b;
}

console.log(sum(3, 7));
console.log(sum(-3, 7));
console.log(sum(3, 0));
console.log(sum(3, null));
console.log(sum(undefined, 7));

function getMessage(age) {
  if (age < 0 || typeof age !== 'number') return null;
  return 'I am ' + age + ' years old.';
}

console.log(getMessage(20));
console.log(getMessage(-20));
console.log(getMessage(0));

const mult = (a, b) => a * b;

console.log(mult(2, 3));
console.log(mult(-2, 3));
console.log(mult(2, 0));

const getMagicNumber = () => 17;
console.log(getMagicNumber());
