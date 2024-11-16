//1. Logical operator: "AND"
//console.log(true && false) //all values have to be TRUE for expression to be TRUE

//2. Logical operator: "OR"
//console.log(true || false) //any value have to be TRUE for expression to be TRUE

// Example:
var ageIsMoreThanEighteen = true
var isUSCitizen = true

var eligibilityForDriversLicense = ageIsMoreThanEighteen && isUSCitizen
console.log("This customer is eligible for DL: " + eligibilityForDriversLicense)

//3. Logical operator: "NOT"
console.log(!true)
console.log(6 !== 10)