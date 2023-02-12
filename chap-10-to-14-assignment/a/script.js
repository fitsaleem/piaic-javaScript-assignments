// // question 1

// Make a Calculator
// input a value from user for example num1 is 7
// input a second value from user for example num2 is 3
// input a third value from user for example sign is "+" or "-" or "*" or "/" or "%"
// print operation in alert() 7-3 =4, or 7*3 =21, or 7/3 =2.3, or 7+3 =10 or 7%3 =1

// strat from their

// let num1=prompt("enter a number:");
// num1=Number.parseInt(num1);
// let operation=prompt("enter your operations (+,-,*,/,% :)  ");
// let num2=prompt("enter a second number:");
// num2=Number.parseInt(num2);
// let result;
// if(operation==="+"){
//     result=num1+num2;
// }else if(operation=="-"){
//     result=num1-num2;
// }else if(operation=="*"){
//     result=num1*num2
// }
// else if(operation=="/"){
//     result=num1/num2;
// }else if(operation==="%"){
//     result=num1%num2;
// }else{
//     alert("invalid operator");
    
// }

// alert(num1+ ""+operation+num2+"="+result);


// refactor code

let num1 = parseFloat(prompt("Enter first value: "));
let num2 = parseFloat(prompt("Enter second value: "));
let sign = prompt("Enter the operation (+, -, *, /, %): ");

let result = (sign === "+") ? num1 + num2 :
             (sign === "-") ? num1 - num2 :
             (sign === "*") ? num1 * num2 :
             (sign === "/") ? num1 / num2 :
             (sign === "%") ? num1 % num2 :
             "Invalid operator";

alert(`${num1} ${sign} ${num2} = ${result}`);


