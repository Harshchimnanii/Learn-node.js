// const xyz = require('./People');// this has values that people folder contain 

// ! this is an empty object 

// !access both of them simultaneously
// console.log(xyz);

// ! accessing one of them 

// console.log(xyz.people , xyz.ages);

//  ! access just one object from the module 

// const {people} = require('./People')

// console.log(people);

// ? access both of them simultaneously with this method 

const {people,ages}= require('./People');

console.log(people , ages);


// ! Now lets talk about built in modules 

const os = require('os');
// console.log(os);
console.log(os.platform() , os.homedir());
