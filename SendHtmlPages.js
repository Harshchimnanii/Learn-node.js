// const http =  require('http');
// const fs = require('fs');
// // readStream.pipe(writeStream);
// const server = http.createServer((req,res) =>{
//     console.log("made a request");
//     res.setHeader('content-type' , 'text/html');
//     fs.readFile('./views/index.html', (err , data )=>{
//         if(err){    
//             console.log(err);
//             res.end();
//         }
//         // res.write(data); // it is used to send multiple methods to the page
//         res.end(data);//we can send data directly into end 
        
//     })
// })
// server.listen(3000 , 'localhost' , () =>{
//     console.log(`Server is running !`);
    
// })

// ! Basic Routing 

const http =  require('http');
const fs = require('fs');

const server = http.createServer((req,res) =>{
    console.log("made a request");
    res.setHeader('content-type' , 'text/html');
    let path = './views/';
switch(req.url){
    case '/':
        path+='index.html';
        res.statusCode = 200;
        break;
    case '/about':
        path+='about.html';
        res.statusCode = 200;
        break;
        // Redirect
    case '/about-me':
        res.statusCode = 301;
        res.setHeader('Location' , '/about');
        res.end();
        break;
    default: 
        path+='404.html';
        res.statusCode = 404;
        break;
}
    fs.readFile(path, (err , data )=>{

        if(err){    
            console.log(err);
            res.end();
        }
        // res.write(data); // it is used to send multiple methods to the page
        res.end(data);//we can send data directly into end 
        
    })
})
server.listen(3000 , 'localhost' , () =>{
    console.log(`Server is running !`);
    
})