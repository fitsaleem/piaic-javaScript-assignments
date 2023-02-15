// JS chapter 21 to 30
// Java-script assignments chapter 21 to 30

// Take a input from user in number with decimal point  user input is 3.4
// Convert it into greater number Example: Math.ceil(3.4); to 4
// Declear a variable of string and assign some text var text="This is my dummy text"
// Slice the text into a new variable from 0 to the rounded number 0 to 4;  Example: text.slice(0, 4) | sliceText = This
// Use for loop and concatination to reverse the sliced string; 0==>4 ==> This ===> shiT 
// print value in alert "shi

// start their

// Step 1: Take input from user
var userInput = prompt("Enter a number with a decimal point:");

// Step 2: Convert input to greater number
var greaterNum = Math.ceil(userInput);

// Step 3: Declare and assign a string variable
var text = "This is my dummy text";

// Step 4: Slice the text into a new variable
var slicedText = text.slice(0, greaterNum);

// Step 5: Reverse the sliced text using a for loop and concatenation
var reversedText = "";
for (var i = slicedText.length - 1; i >= 0; i--) {
  reversedText += slicedText[i];
}

// Step 6: Print the result in an alert
alert(reversedText);
