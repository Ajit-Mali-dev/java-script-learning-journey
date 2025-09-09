
let userName = "Ajit"
let lastName ="         Mali        "
let balance = 5000
// console.log(`My first name is ${userName} and last name is  ${lastName}`);

// console.log(typeof userName);

// console.log(userName.length);
// console.log(userName.indexOf('t'));

// console.log(userName.replace("i", "ee"));

// console.log(userName)

// console.log(userName.charAt(3));
// console.log(userName.indexOf("t"));

// console.log( userName.at(3));

// We can find character index by charat() and at() method

// let fullName = console.log( userName.concat(' ' , lastName ,' ' , balance))  //  To add space between joined string we have leave ' ' where we want space

// // console.log(userName.endsWith('t'));  // This return boolean valuesl

// console.log(lastName.includes('a'))
// console.log(lastName.includes('s'))     // includes can only check one value at a time

// console.log(userName.indexOf('i'));  // This is used to find index of any string value

// console.log(userName.lastIndexOf('t'));   // This is used to search idex of any value from ending to strating , where does the desired valure comes last

// console.log(userName.replaceAll('Ajit', 'Ajeet'));  // This is used to replace whole string value .

// .replace() is used to replace just one value.


let fullName = console.log(userName.slice(0 , 2)); //  This is used to take a slice out from string , It doesn't include the lend value
fullName = console.log(userName.split('' ,4)); //  This is used to Split the string and returns into a new string as in array form.

console.log(userName.startsWith('A'));   // It is used to check the starting of value is matching the search valur or not , return boolean value

console.log(userName.toLocaleUpperCase()); // This is used for converting string into uppercase same goes for lowercase
console.log(userName.toLocaleLowerCase()); // Transform text into lowercase


console.log(lastName.trim()); 
// Trim whitespaces fom start and end.   Have simliar properties like trimstart() it only trim whitespaces from starting , trimend() trim whitespaces from end.

console.log(userName.valueOf());  //Return the value of the specified object.
























