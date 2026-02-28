const { log } = require('console');
const fs = require('fs'); // * all are asynchronous tasks 
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

// fs.writeFile('./Docs/Blog1.txt' , 'Hello , world' , () => {
//     console.log(`edited the file`);
// })
// ! create a file 
// fs.writeFile('./Docs/Blog2.txt' , 'Hello , again' , () => {
//     console.log(`edited the file`);
// })



//! Directories
if(!fs.existsSync('./assets')) {
fs.mkdir('./assets' , (err) => {
    if(err){
        console.log(err);
    }
    console.log(`created the directory`)
})
}
// ! removed the directory 
else{
    fs.rmdir('./assets' , (err) => {
    if(err){
        console.log(err);
    }
    console.log(`removed the directory`)

})
}


//! Deleting files! 
if(fs.existsSync('./Docs/deleteme.txt')){
    fs.unlink('./Docs/deleteme.txt' , (err) => {
        if(err){
            console.log(err);
            
        }
        console.log(`file was deleted successfully`)
    })
}
else{
    fs.writeFile('./Docs/deleteme.txt' , 'hello again' , () => {
        console.log(`file was created successfully`)
    })
}