/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean("true"); //changed Boolean to "true" to reflect valid results
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let ageNum = Number(age); // converted age to number
let year = "5"; // defined year
let ageNumTwo = Number(year); // converted string to number
let totalAge = ageNum + ageNumTwo; // changed variable to match above, added by ensuring both are number values
console.log("Total Age: " + totalAge);

// new code examples for part 2
let ageOfDeath = undefined;
console.log("Deceased: " + (Boolean(ageOfDeath))); // implicit conversion, Boolean with edge case

let yearNow = "2026"; 
let yearBorn = "1994";
console.log("Current age: " + (yearNow - yearBorn)); // explicit conversion, arithmetic operations 