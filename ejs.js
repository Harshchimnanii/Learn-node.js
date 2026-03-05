const express = require('express');
const path = require('path');

const app = express();

// Set view engine if needed (example: ejs)
app.set('view engine', 'ejs');
app.set('views' , 'EJSfiles');

// Listen for requests
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

// Routes
app.get('/', (req, res) => {
    res.render(`index` , {title : 'Blogs website'});
});

app.get('/about', (req, res) => {
//   res.sendFile(path.join(__dirname, 'views', 'about.html'));
    res.render(`about`);
});

// Redirects
app.get('/blogs/create', (req, res) => {

    res.render('create')


});

// 404 Page
app.use((req, res) => {
//   res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.render('404')
});