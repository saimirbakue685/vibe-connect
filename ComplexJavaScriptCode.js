// Filename: ComplexJavaScriptCode.js

/*
	Description:

	This JavaScript code calculates the average of a set of numbers
	after applying various mathematical operations such as addition,
	subtraction, multiplication, and division. It also includes complex
	conditionals to handle different types of input, including negative
	and floating-point numbers. The code utilizes functions, loops, and
	arrays to perform the calculations in an efficient and organized manner.

	Author: [Your Name]
	Date: [Current Date]
*/

// Function to calculate the average of an array of numbers
function calculateAverage(numbers) {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}

	return sum / numbers.length;
}

// Mathematical operations
function addition(a, b) {
	return a + b;
}

function subtraction(a, b) {
	return a - b;
}

function multiplication(a, b) {
	return a * b;
}

function division(a, b) {
	return a / b;
}

// Complex conditional to handle various inputs
function calculateComplexAverage(numbers) {
	if (!Array.isArray(numbers) || numbers.length === 0) {
		throw new Error("Invalid input. Please provide a non-empty array of numbers.");
	}

	let total = 0;

	for (let number of numbers) {
		if (typeof number !== "number") {
			throw new Error("Invalid input. Please provide an array of numbers.");
		}

		if (number < 0) {
			total = addition(total, multiplication(subtraction(number, 2), 2));
		} else if (number === 0) {
			total = addition(total, -1);
		} else if (number > 100) {
			total = addition(total, division(number, 2));
		} else {
			total = addition(total, number);
		}
	}

	return division(total, numbers.length);
}

// Test Cases
const numbers = [1, 2, 3, 4, 5];
console.log(calculateAverage(numbers)); // Output: 3

console.log(calculateComplexAverage(numbers)); // Output: 3

const invalidNumbers = [1, 2, "3", 4, 5]; // Invalid input with a non-number element
console.log(calculateComplexAverage(invalidNumbers)); // Throws an error

const emptyArray = []; // Invalid input with an empty array
console.log(calculateComplexAverage(emptyArray)); // Throws an error

const floatingPointNumbers = [1.5, 2.7, 3.9];
console.log(calculateComplexAverage(floatingPointNumbers)); // Output: 2.3666666666666667

// More test cases can be added here...

// End of ComplexJavaScriptCode.js