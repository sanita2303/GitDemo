//Function is the mechanism in javascript language when you can take the certain pieces of the logic of your code and put it into the reusable component.
//Then you can call your function from the different places inside of your application and get access to that source code. So you dont need to repeat your code again n again.
//You just call the function that perform a certain operation for you.

// 1. Declarative function: This function can be invoked at any time.
helloOne()
function helloOne(){
    console.log('Hello one!')
}
//helloOne()

// Anonymus function
var helloTwo = function(){
    console.log('Hello two!')
}
helloTwo()

// ES6 function syntax or arrow function
var helloThree = () => {
    console.log('Hello three!')
}
helloThree()

//Function with arguments
function printName(name, lastName){
         console.log(name + ' ' + lastName)
}
printName('Mike', 'Smith')

//Function with return
function multiplyByTwo(number){
    var result = number * 2
    return result
}
var myResult = multiplyByTwo(5)
console.log(myResult)

// import function
import { printAge } from '../helpers/printHelper.js'
printAge(5)

// import everything
import * as helper from '../helpers/printHelper.js'
helper.printAge(20)