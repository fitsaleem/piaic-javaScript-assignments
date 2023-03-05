// Java-script assignments chapter 35 to 38

// input value from user in String var inputValue="cloUd naTive computinG"
// Convert every first letter of the content in Capitalize case. inputValue="Cloud Native Computing" use Function
// print value in console.log() console.log(inputValue) | check result in browser console
// Second Assignment
// User input value in Number through prompt Example value=5
// Factorialize a Number use Function
// print value in console.log()  console.log(value); the result is 120
// Understand this logic
// var value= multiply(4,3,6);

// console.log("value", value); // The result is ?

// function add(a, b){ var z= a+b; return z; };

// function multiply(a, b, c){ var z= a* add(b, c); return z; };

// console.log("course", course); // The result is ? console.log("z", z); // The result is ?

// var course="cloud native computing";



// start from their:

let inputValue = "cloUd naTive computinG";

function capitalize(input) {
  let words = input.toLowerCase().split(" ");
  return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

inputValue = capitalize(inputValue);

console.log(inputValue);


let value = parseInt(prompt("Enter a number:"));

function factorial(num) {
  if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 1;
  } else {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }
}

value = factorial(value);

console.log(value);


