const http =  require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req,res) =>{
    
    const num = _.random(0,20);
    console.log(num);
    
    const greet = _.once(()=>{
        console.log(`hello`)
    })
    greet();
    greet();
    
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