//Question-1: Write a JavaScript program that takes a string variable called name and prints "Hello, [name]!" to the console. For example, if name = "John", the output should be "Hello, John!".

var name = "John";
console.log("Hello, " + name + "!");

//Question-2: Create a JavaScript program that calculates the sum of two numbers, a and b, and prints the result to the console. For example, if a = 5 and b = 10, the output should be 15.

var a = 5;
var b = 10;
var sum = a + b;

console.log(sum);

//Question-3: Declare a variable called age and assign it your age. Then, print "I am [age] years old." to the console. For example, if age = 25, the output should be "My age is 25".

let age = 25;
console.log("I am " + age + " years old");

//Question-4: Given 3 subjects Math, English, and Physics find the total marks and average of 3 subjects.

let math = 95;
let english = 85;
let physics = 90;

let totalMarks;
let average;

totalMarks = math + english + physics;
average = totalMarks / 3;

console.log("Total Marks is " + totalMarks + " and average is " + average);

//Question-5: Create 4 variables. 2 in the camel case and 2 in the snake case. (it could be anything) make sure it’s meaning full and print all the values in the console

//2 CamelCase variable
let FirstName = "sakif";
let lastName = "Islam";

console.log("My name is " + FirstName + " " + lastName);

// 2 snake_case variable
let city_name = "Dhaka";
let country_name = "Bangladesh";

console.log("I live in " + city_name + " which is capital of " + country_name);
