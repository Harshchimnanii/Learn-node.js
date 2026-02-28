const fs = require('fs');
//! Reading files 

// fs.readFile('./Docs/Blog1.txt' , (err , data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });
// ? check the error 
// fs.readFile('./Docs/Blog1q.txt' , (err , data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('lst line');



//! Writing files 

fs.writeFile('./Docs/Blog1.txt' , 'Hello , world' , () => {
    console.log(`edited the file`);
})
// create a file 
fs.writeFile('./Docs/Blog2.txt' , 'Hello , again' , () => {
    console.log(`edited the file`);
})





//! Directories
//! Deleting files! 