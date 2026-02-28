const people = ['Amit' , 'Kashish' , 'Gun' , 'Harsh'];
const ages = [10 , 12 ,34 , 24 ]
// module .export is used to export the data 
// console.log(people);
// this will export hello as a value of xyz 
// module.exports = 'hello';
// this will export value of people in xyz
// module.exports = people;


// trying to access both values let me help you 

// first of all the module exports an object so this will be 

module.exports = {
    people:people,
    ages:ages
};
