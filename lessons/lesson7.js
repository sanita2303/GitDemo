//Loops

//console.log("Hello World!")
//console.log("Hello World!")
//console.log("Hello World!")
//console.log("Hello World!")
//console.log("Hello World!")

//for(statement1; statement2; statement3){

//}
//statement1: It is our initial statement, what we want to start the loop with.
//statement2: Will define the condition of how long do we want to run the loop for & when we want to stop the loop. This is a condition for stopping point for the loop.
//statement3: What do we need to do after each cycle of the loop.

//for loop  (for i loop)
for(let i=0; i<5; i++){
    console.log("Hello World!")
}

var cars = ["Volvo", "Toyota", "Tesla"]
//for of loop
for(let car of cars){
    console.log(car)
    if(car =="Toyota"){
        break
    }
}

//ES6 syntax for each loop
cars.forEach( car =>{
    console.log(car)
})