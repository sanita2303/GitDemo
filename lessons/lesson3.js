// Objects: Object is an entity that can hold multiple values at the same time. Object is defined by {} and information is held inside the object in Key and value pair.

var customer = {
    firstName: 'John',
    lastName: 'Smith',
    cars: ["Volvo", "Toyota", "Tesla"]
}
// Dot notation
customer.firstName = "Mike"
// Bracket notation
customer['lastName'] = "Silver"
console.log(customer.firstName)   // 1st approach
console.log(customer['lastName']) // 2nd approach
console.log(`${customer.firstName} ${customer.lastName}`)

// Array: Array has an index and index in array always starts at 0
var car = ["Volvo", "Toyota", "Tesla"]
car[1] = "BMW"
console.log(car[1])
console.log(customer.cars[0])