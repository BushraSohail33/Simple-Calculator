"use strict";
// import inquirer from "inquirer";
Object.defineProperty(exports, "__esModule", { value: true });
// // Asking Questions from users through inquirer.
// let Answers = await inquirer.prompt([
//     {message: "Enter First Number", type: "Number", name: "firstnumber"},
//     {message: "enter second number", type: "number", name: "secondnumber"},
//     {
//         message: "Select one operator to perform operations", 
//         type: "list",
//         name: "operator",
//         choices: ["Addition","Subtraction","Multiplication","Diviision"],
//     },
// ]);
// // Conditonal statements if-else
// if(Answers.operator === "Addition"){
//     console.log(Answers.firstnumber + Answers.secondnumber)
// }
// if(Answers.operator === "Subtraction"){
// console.log(Answers.firstnumber - Answers.secondnumber)
// }
// if(Answers.operator === "Multipliction"){
//     console.log(Answers.firstnumber * Answers.secondnumber)}
// if(Answers.operator === "Division"){
//     console.log(Answers.firstnumber / Answers.secondnumber)}
// else{
//     console.log("Invalid Input");
// }
var inquirer_1 = require("inquirer");
//Asking Question from users through Inquirer
var answers = await inquirer_1.default.prompt([
    { message: "Enter First Number", type: "Number", name: "firstnumber" },
    { message: "Enter second number", type: "number", name: "secondnumber" },
    {
        message: "Select one operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Diviision"],
    },
]);
// Conditional Statements If-else
if (answers.operator === "Addition") {
    console.log(answers.firstnumber + answers.secondnumber);
}
else if (answers.operator === "Subtraction") {
    console.log(answers.firstnumber - answers.secondnumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.firstnumber * answers.secondnumber);
}
else if (answers.operator === "Division") {
    console.log(answers.firstnumber / answers.secondnumber);
}
else {
    console.log("Invalid Input");
}
