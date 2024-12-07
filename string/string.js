//Basic Questions related to String Methods

//Question-1: Write a program to check if a sentence has the word "Hello" using the search method.

// Hint: Use the search method to see if the sentence has the specified word, and then use an if-else statement to print a message.

let text = "Hello world!";
let search = text.includes("Hello");

if (search == true) {
  console.log("The word is in the sentence");
} else {
  console.log("The word is not in the sentence");
}

//Question-2: Write a JavaScript program that takes a user's name and then displays a greeting message using string concatenation. The program should ensure that any whitespace in the user's input is removed before concatenation.

// Example Output: Hello, Sarah
// Hint: Use the prompt() function to get the user's name, trim() method to remove whitespace, and concat() or the + operator to concatenate the strings.

let greetings = "Welcome to Bangladesh";
let user = prompt("Enter your Name: ");
let message = greetings.concat(" ", user.trim());
console.log(message);

//Question-3: Write a JavaScript program that uses template literals to create a dynamic message. The program should take the user's favorite programming language, their name, and the year they started learning it as inputs. Then, display a message that includes this information, formatted across multiple lines. (underlines should be dynamic)

// Example Output: Sara, you have been coding in Python since 2018.

let favouriteLanguage = "Javascript";
let userName = "Sakif";
let year = 2024;

console.log(
  `${userName}, you have been coding in ${favouriteLanguage} since ${year}`
);

// Question-4: Write a JavaScript program that checks if a given email address belongs to Yahoo. The program should be case-insensitive and print a message indicating whether the email is a Yahoo address or not.

// Hint: Use the includes method to check if the email contains @yahoo.com. Convert both the email address and the string @yahoo.com to lowercase before performing the check to ensure it's case-insensitive

let email = "sakif@ahoo.com";
let lowercaseOutput = email.toLowerCase();
let checkEmail = lowercaseOutput.includes("@yahoo.com");

if (checkEmail == true) {
  console.log("It is a yahoo email address");
} else {
  console.log("It is not a yahoo email address");
}

// Question - 5: Write a JavaScript program that checks whether a given number is divisible by 10. The program should print a message indicating whether the number is divisible by 10 or not.

// Hint: Use the modulus operator % to determine if the remainder when dividing the number by 10 is 0.

let number = 11;

if (number % 10 == 0) {
  console.log("The number is divisible by 10");
} else {
  console.log("The number is not divisible by 10");
}

// Question - 6: Write a JavaScript program that checks whether a given number is even or odd. The program should print a message indicating whether the number is even or odd.

// Hint: Use the modulus operator % to check if the number is divisible by 2 without a remainder.

let inputNumber = 10;

if (inputNumber % 2 == 0) {
  console.log("The number is Even");
} else {
  console.log("The number is Odd");
}

// Question - 7: Write a JavaScript program that checks whether a given character is a string or a number. The program should print a message indicating whether the given variable is a string or number.

// hint: you can use if / else and typeof to check

let input = "10";
let type = typeof input;
console.log(type);
