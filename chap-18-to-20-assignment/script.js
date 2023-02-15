//Java-script assignments chapter 18 19 20

// Make a TODO
// Customize previous assignment "ch_15_16_17" with for loop...

// start from their

var courses = [];

for (var i = 1; i <= 5; i++) {
  courses.push(prompt(`Enter the name of course ${i}:`, `Course ${i}`));
}

alert("Courses: " + courses);

for (var i = 0; i< courses.length; i++) {
  courses[i] = prompt(`Enter the new name for course ${i+1}:`, courses[i]);
}

alert("Edited Courses: " + courses); 