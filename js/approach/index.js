// input: number
// output: undefined

// algo
// 1. iterate 2 .. num
// 2. check if number is prime
// 2.0 create counter
//2.1 iterate 1 .. number
//2.2 if number % index === 0 -> count++
//2.3 if counter >= 2 -> is not prime
// 3. if prime -> console

function getPrimes(num) {
  for (let number = 2; number <= num; number++) {
    let counter = 0;

    for (let index = 2; index <= number; index++) {
      if (number % index === 0) {
        counter++;
      }
    }
    if (counter === 1) {
      console.log(number);
    }
  }
}

// getPrimes(10);
// getPrimes(11);
// getPrimes(15);

//refactored

//input: number
//output: boolean

function isPrime(number) {
  for (let index = 2; index < number; index++) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
}

function getPrimes(num) {
  for (let number = 2; number <= num; number++) {
    if (isPrime(number)) {
      console.log(number);
    }
  }
}

getPrimes(10);
