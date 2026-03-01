// const http = require('http');
// const server = http.createServer((req , res) => {
//     console.log("Server running on port 3000");
//     console.log(req.url , req.method);
    
//     // ! yes we have created it but its just floationg in our code right now we need to make a listen request to acces it 
    
// });
// server.listen(3000 , 'localhost' , () =>{
//     console.log("server running!");
    
// });



// The response object 

const { DiffieHellmanGroup } = require('crypto');
const http = require('http');
const server = http.createServer((req , res) => {
    res.write('<head><link rel="stylesheet" href="#"</head>');
    res.setHeader('content-type' , 'text/html');
    res.write(`<h1>Hello , Peoples</h1>`);
    res.end();
    
    // ! yes we have created it but its just floationg in our code right now we need to make a listen request to acces it 
    
});
server.listen(3000 , 'localhost' , () =>{
    console.log("server running!");
    
});


