/** Given an array consisting of movie names, iterate over the array 
 * with the output of the names of each movie to the console */
const movies = ['Summer weekend', 'Golden month', 'The last summer', 'Christmass spirit'];
movies.forEach(title => console.log(title));

/** Given an array of car manufacturers, convert the array to a string 
 * and back to an array */
const carMakers = ['Accura', 'Ford', 'Honda', 'Subary', 'Toyota'];
const carMakersStr = carMakers.join(' ');
console.log(carMakersStr);
console.log(typeof carMakersStr);
const carMakersArr = carMakersStr.split(' ');
console.log(carMakersArr);
console.log(typeof carMakersArr);

/** Given an array of the names of your friends, 
 * add the words hello to each element of the array */
let friends1 = ['Jess', 'Olivia', 'Martha', 'Batty', 'Kate'];
console.log('Friends solution 1 before: ', friends1);
for (let i = 0; i < friends1.length; i++) {
    friends1[i] = 'hello ' + friends1[i];
}
console.log('Friends  solution 1 after: ', friends1);

let friends2 = ['Jess', 'Olivia', 'Martha', 'Batty', 'Kate'];
console.log('Friends solution 2 before: ', friends2);
friends2.forEach((friend, ind) => {
    friends2[ind] = 'hello ' + friend;
})
console.log('Friends solution 2 after: ', friends2);


/** Convert numeric array to Boolean */
const numericArr = [-1, 0, 1, 2];
// if need to preserve the originale array
const boolArr = numericArr.map(Boolean);
console.log('Boolean array', boolArr);
// if need to modify the original array
numericArr.forEach((value, ind) => numericArr[ind] = Boolean(value));
console.log('Converted to boolean array', numericArr);

/** Sort the array [1,6,7,8,3,4,5,6] in descending order */
const arr = [1,6,7,8,3,4,5,6];
arr.sort((a, b) => (b-a));
console.log('Sorted array: ', arr);

/** Filter array [1,6,7,8,3,4,5,6] by value> 3 */
const arrToFilter = [1,6,7,8,3,4,5,6];
const filteredArr = arrToFilter.filter( val => val > 3);
console.log('Filtered array: ', filteredArr);


/** Write a function that takes two parameters - an array and a number and 
 * outputs the index of an array element equal to a number */
const numsArr = [1,2,3,4,5];
function outputIndex(arr, num) {
    let index = arr.indexOf(num);
    if (index >= 0) {
        console.log(`Index of ${num} is ${index}`);
    }
}
outputIndex(numsArr, 0);
outputIndex(numsArr, 1);
outputIndex(numsArr, 5);
outputIndex(numsArr, 6);

/** Implement a loop that will print the number 'a' until it is less than 10 */
// it is not clear what is ment by a < number 'a' > 
// please, provide more clear task conditions

/** Implement a loop that prints prime numbers to the console */
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
  
  maxRangePrime = 20;
  console.log('Prime numbers: ')
  for (let n = 0; n <= maxRangePrime; n++) {
      if (isPrime(n)) {
          console.log(n);
      }
  }

/** Implement a loop that prints odd numbers to the console */
maxRangeOdd = 20;
console.log('Odd numbers:');
for (let i=0; i <= maxRangeOdd; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
