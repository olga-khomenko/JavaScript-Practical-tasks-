/** Given the string 'ahb acb aeb aeeb adcb axeb'. 
 * Write a regular expression that matches the strings 
 * ahb, acb, aeb by pattern: letter 'a', any character, letter 'b' */

console.log('Task 1:');

const stringOne = 'ahb acb aeb aeeb adcb axeb';
const res = stringOne.match(/a\w?b/g);
console.log(String(res));


/** Given the string '2 + 3 223 2223'. 
 * Write a regex that finds line 2 + 3 without capturing the rest */

console.log('\nTask 2:');

const stringTwo = '2 + 3 223 2223';
console.log(stringTwo.match(/2(\W+?)3/)[0]);


/** Get the day, month and year of the current date and 
 * output it to the console separately */

console.log('\nTask 3:');
const todayDate = new Date();

console.log('Day: ', todayDate.getDate());
console.log('Month: ', todayDate.getMonth()+1); // zero indicates the first month of the year
console.log('Year: ', todayDate.getFullYear());
