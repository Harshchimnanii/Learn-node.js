const fs = require('fs');

const readStream = fs.createReadStream('./Docs/blog3.txt', {encoding : 'utf8'});

const writeStream = fs.createWriteStream('./Docs/blog4.txt', {encoding : 'utf8'});

// readStream.on('data' , (chunk)=>{
//     console.log(`--new chunk--`);
//     console.log(chunk);
//     writeStream.write(`\n Next chunk is Processed\n`);
//     writeStream.write(chunk);
// })

// a much shoerted way to do this is piping

readStream.pipe(writeStream);