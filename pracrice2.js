const boolTrue = true;
const str = 'mySrt';
const num = 33;

/**
 * Task 1
 * Perform addition of various types (string + boolean, string + number, number + boolean)
 */
console.log('Task 1:');
strPlusBool = str + boolTrue;
strPlusNum = str + num;
numPlusTrueBool = num + boolTrue;
numPlusFalseBool = num + false;
console.log('str + bool: ', strPlusBool);
console.log('str + num: ', strPlusNum);
console.log('num + true bool: ', numPlusTrueBool);    // true converted to number === 1
console.log('num + false bool: ', numPlusFalseBool);   // false converted to number === 0
console.log('');

/**
 * Task 2
 * Perform multiplication of various types (string * boolean, string * number, number * boolean)
 */
console.log('Task 2:');
strMultBool = str * boolTrue;
strMultNum = str * num;
numMultTrueBool = num * boolTrue;
numMultFalseBool = num * false;
console.log('str * bool: ', strMultBool);
console.log('str * num: ', strMultNum);
console.log('num * true bool: ', numMultTrueBool);
console.log('num * false bool: ', numMultTrueBool);
console.log('');

/**
 * Task 3
 * Divide different types (string / boolean, string / number, number / Boolean)
 */
console.log('Task 3:');
strDivBool = str / boolTrue;
strDivNum = str / num;
numDivTrueBool = num / boolTrue;
numDivFalseBool = num / false;
console.log('str / bool: ', strDivBool);
console.log('str / num: ', strDivNum);
console.log('num / true bool: ', numDivTrueBool);
console.log('num / false bool: ', numDivFalseBool);
console.log('');

/**
 * Task 4
 * Perform explicit conversion (number, string, boolean)
 */
console.log('Task 4:');
console.log('Convert string to number');
console.log('str to num valid: ', Number('5'));
console.log('str to num invalid: ', Number('x'));
console.log('str to num empty: ', Number(''));
console.log('str to num whitespace: ', Number(' '));
console.log('str to float num: ', parseFloat('5.6'));
console.log('str to float num with 2 dec point: ', parseFloat('5.6').toFixed(2));
console.log('str to int num: ', parseInt('5.6'));

console.log('\nConvert number to string');
console.log('num to string', String(45));
console.log('float to string', String(22.99));
console.log('num to string', num.toString());
console.log('num to string', (99).toString());

console.log('\nConvert string to boolean');
console.log('str to bool: ', Boolean('has value'));
console.log('str to bool empty: ', Boolean(''));

console.log('\nConvert boolean to string');
console.log('false bool to str: ', String(false));
console.log('false bool to str: ', String(true));

console.log('\nConvert number to boolean');
console.log('two to bool: ', Boolean(2));
console.log('one to bool: ', Boolean(1));
console.log('zero to bool empty: ', Boolean(0));
console.log('minus one to bool: ', Boolean(-1));

console.log('\nConvert boolean to number');
console.log('false bool to number: ', Number(false));
console.log('true bool to number: ', Number(true));
