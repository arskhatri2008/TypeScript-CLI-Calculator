#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter your first number",
        type: "number",
        name: "firstNumber",
    },
    {
        message: "Enter your second number",
        type: "number",
        name: "secondNumber",
    },
    {
        message: "Select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// Conditional Statement
if (answer.operator === "Addition") {
    console.log("Addition of two numbers is: ", answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log("Subtraction of two numbers is: ", answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log("Multiplication of two numbers is: ", answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log("Division of two numbers is: ", answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Invalid Operator");
}
