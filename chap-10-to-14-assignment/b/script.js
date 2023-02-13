// Second Assignment - Make a Percentage Calculator
// Get the 5-course number from the userfor example course1 is 70 var totalMarks = 500
// Calculate the total percentage formula:  obtainedMarks * 100/ totalMarks
// print output in alert.

//start from their

//  let course1=prompt("enter your english marks: ");
// course1=Number.parseInt(course1);
// let course2=prompt("enter your math marks: ");
// course2=Number.parseFloat(course2);
// let course3=prompt("enter your urdu marks: ");
// course3=Number.parseFloat(course3);
// let course4=prompt("enter your physic marks: ");
// course4=Number.parseFloat(course4);
// let course5=prompt("enter your computer marks: ");
// course5=Number.parseFloat(course5);
// totalMarks=500;
// obtainedMarks=course1+course2+course3+course4+course5;
// totalPercentage=obtainedMarks*100/totalMarks;
// alert("your total percentage is: " + totalPercentage);




// refactor code

const course1 = parseInt(prompt("Enter your English marks: "));
const course2 = parseFloat(prompt("Enter your Math marks: "));
const course3 = parseFloat(prompt("Enter your Urdu marks: "));
const course4 = parseFloat(prompt("Enter your Physics marks: "));
const course5 = parseFloat(prompt("Enter your Computer marks: "));
const totalMarks = 500;
const obtainedMarks = course1 + course2 + course3 + course4 + course5;
const totalPercentage = obtainedMarks / totalMarks * 100;
alert(`Your total percentage is: ${totalPercentage}`);