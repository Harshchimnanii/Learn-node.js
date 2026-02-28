const fs = require('fs');

const readStream = fs.createReadStream('./Docs/blog3.txt', {encoding : 'utf8'});

readStream.on('data' , (chunk)=>{
    console.log(`--new chunk--`);
    console.log(chunk);
})