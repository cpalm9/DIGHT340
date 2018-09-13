// let is scoped to the code block and cannot be reset in the current scoped block
// const is CONSTANT, cannot be reassigned
// var is globally scoped
let mood = "disappointed";
console.log(mood);

// everything in JS is an object

let record = ['a', 'b', 'c'];

// for..of gets values
// for..in gets indices
for (let r in record){
  console.log(`The record is ${r}`);
}

const car = new Object();
car.color = 'blue';