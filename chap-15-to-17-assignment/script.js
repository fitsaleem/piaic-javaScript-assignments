// Java-script assignments chapter 15 16 17

// Make a TODO
// Create an empty array with the name is courses. ```example: var courses=[] ``
// Get the 5-course name from the user, example: var course1 =prompt("course 1", "computer")  and save all 5 value in "courses" array. example: courses.push(course1)
// print courses array in alertexample: alert(courses)
// print all full 5-course name one by one in prompt. example: course1=prompt(course1, course1Value)
// If the user edit any value (through prompt), then that value is edit in the array. example: course1=prompt(course1, course1ValueEdit)  use Array.splice() to replace and edit index in array
// print courses array in alertexample: alert(courses)


// start from their:
// Step 1: Create an empty array with the name is courses

let course=[];

// Step 2: Get the 5-course name from the user

let course1=prompt("course 1", "computer");
let course2=prompt("course 2", "physic");
let course3=prompt("course 3", "maths");
let course4=prompt("course 4", "pst");
let course5=prompt("course 5", "urdu");



// Step 3: Save all 5 values in "courses" array

course.push(course1);
course.push(course2);
course.push(course3);
course.push(course4);
course.push(course5);


// Step 4: Print courses array in alert
alert("total courses are: "+ course)

// Step 5: Print all full 5-course name one by one in prompt

let editCourse1=prompt("course 1", course1);
let editCourse2=prompt("course 2", course2);
let editCourse3=prompt("course 3", course3);
let editCourse4=prompt("course 4", course4);
let editCourse5=prompt("course 5", course5);

// Step 6: If the user edits any value (through prompt), then that value is edited in the array

course.splice(0,1,editCourse1);
course.splice(1,1,editCourse2);
course.splice(2,1,editCourse3);
course.splice(3,1,editCourse4);
course.splice(4,1,editCourse5);

// Step 7: Print courses array in alert
alert("modified cources are:" + course)