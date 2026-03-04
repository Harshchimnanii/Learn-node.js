const express = require('express');

const app = express();

app.listen(3000);
//bakwass cheeze

app.get('/' , (req , res) => {
    // res.send(`<p>Hello bacchoo</p><p>krishna is love</p>`);
});
app.get('/hello' , (req , res) => {
    // res.send(`<p> This is what i want </p>`);
});
// app.get('/about' , (req , res) => {
    // res.send(`<p>Subscribe for more good content</p>`)
// }); 
// send a filee
app.get('/about' , (req , res) => {
    res.sendFile('./views/about.html' , {root: __dirname})
});
app.get('/index' , (req , res) => {
    res.sendFile('./views/index.html' , {root: __dirname})
});
app.get('/login' , (req , res) => {
    res.sendFile('./views/login.html' , {root: __dirname})
});


// ?Redirects 
// app.get('/signup' , (req , res) => {
//     res.redirect('/login');
// });

// default case 
app.use((req , res) => {
    res.sendFile('./views/404.html' , {root: __dirname})
});