// JavaScript source code
console.log("This is the javascript file");

//declaring variables
//let, var, and const.

let FirstName = "Aaron";
let SecondName = "Museo";
let age = 18;
let height = 5.7;
const school = "Strathmore Institute";

console.log(typeof FirstName);

const StudentAges = [16,18,90,43,32];

console.log("Age of the second student is " + StudentAges[1])

let StudentDetails = {
    FirstName: "Aaron", SecondName, age, height, school, printDetails: function () { console.log("My name is ", this.FirstName, "I am "+ age) }
}

StudentDetails.printDetails();
    console.log(StudentDetails);

if (age => 18) {
    console.log("This student can vote")
} else{
    console.log("This student cant vote")

};

function myFunction() {

    console.log("Function 1");
}

myFunction();

function findproduct(num1, num2) {
      
    return num1 * num2;
}

let Product = findproduct(5,10)
console.log("Product is ", Product);

