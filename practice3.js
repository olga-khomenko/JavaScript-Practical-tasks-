/** Create a car object, add a color property to it with the value equals 'black' */
const car = {
    color: 'black',
    enginePower: 235, 
    power() {
        console.log(`Car engine power is: ${this.enginePower}hp`)
    }
}
console.log(`Car colour is: ${car.color}`)

/** Change the color property of the car object to 'green' */
car.color = 'green';
console.log(`Car colour is: ${car.color}`)

/** Add the power property to the car object, which is a function 
 * and displays the engine power to the console */
car.power();

/**  Pears and apples are accepted to the warehouse, write a function 
 * that returns the result of adding the number of accepted pears and apples */
function acceptedFruitesSum(apples, pears) {
    return apples + pears;
}

console.log('Accepted fruites sum is: ', acceptedFruitesSum(apples=23, pears=34));

/** Your name is saved in the payment terminal, write a function to define the name 
 * in the terminal (if you entered your name, then hello + name, if not, 
 * then there is no such name) */
const paymentTerminal = {
    userName: 'Olga'
}

function validateName(name) {
    if (paymentTerminal.userName === name) {
        console.log('Hello ', name);
    } else {
        console.log('There is no such name')
    }
}

validateName('Olga');
validateName('John');

/** Write a function for calculating the type of argument and type output to the console */
function printType(arg) {
    console.log('The argument type is: ', typeof arg)
}

printType(1);
printType('Olga');
printType(true);
printType(3.14);

/** Write a function that determines whether a number is prime or not */
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

for (let n = 0; n < 40; n++) {
    if (isPrime(n)) {
        console.log(`Number ${n} is prime`);
    }
}
