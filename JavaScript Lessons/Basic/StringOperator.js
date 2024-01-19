/*
String Concatenation Operator:
The string concatenation operator (+) concatenates two string values together, returning another string that is the union of the two operand strings.
*/
// Example
var myStr = "This is the start. " + "This is the end."; // Concate this line
console.log(myStr); // Output: This is the start. This is the end.

/*
Constructing Strings with Variables:
Sometimes you will need to build a string, Mad Libs style. By using the concatenation operator (+), you can insert one or more variables into a string you're building.
*/
// Example
var myName = "Joy";
var age =25;
var myStr = "My name is " + myName + " and I am "+age+" years old"; // Concate this line
console.log(myStr); // Output: My name is Joy and I am 25 years old

/*
String Template Literals (Template Strings):
Introduced in ECMAScript 6, template literals allow you to embed expressions inside string literals using backticks (``).
*/
// Example
const person = {
  name: "Joy",
  age: 25
};
const greeting = `Hello, my name is ${person.name}! I am ${person.age} years old.`; // Concate this line
console.log(greeting); // Output: Hello, my name is Joy! I am 25 years old.

/*
Escape Sequences in Strings:
Quotes are not the only characters that can be escaped inside a string. Here is a table of common escape sequences:
Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	backspace
\f	form feed
*/
// Example
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; 
console.log(myStr); // Output: FirstLine
                    //         \SecondLine
                    //         ThirdLine



                    let singleQuote = 'This is an example of escaping a single quote: \'Hello\'';
                    let doubleQuote = "This is an example of escaping a double quote: \"World\"";
                    let backslash = "This is an example of escaping a backslash: \\";
                    let newline = "This is a string\nwith a newline character.";
                    let carriageReturn = "This is a string\rwith a carriage return character.";
                    let tab = "This is a string with a\ttab character.";
                    let backspace = "This is a string with a\bbackspace character.";
                    let formFeed = "This is a string\fwith a form feed character.";

                    console.log(`${singleQuote} \n${doubleQuote} \n${backslash} \n${newline} \n${carriageReturn} \n${tab} \n${backspace} \n${formFeed}`);
