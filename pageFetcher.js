const fs = require('fs'),
  request = require('request');


const args = process.argv.slice(2);
const pageFetcher = (args) => {
  const [url, filePath] = args;

  // Request is made to the given URL
  request(url, (error, response, body) => {
    if (error) {
      console.log(`Oops looks like the URL ${url} is not valid`);
    } else {
      //Data from URL get written to specified file path 

      fs.writeFile(filePath, body, (err) => {
        if (err) {
          console.log(`Oops looks like the file Path ${filePath} is invalid`);
        } else {
          fs.stat(filePath, (err, fileStats) => {
            if (err) {
              console.log(err)
            } else {
              fileSize = fileStats.size
              console.log(`Downlaod Complete! ${fileSize} bytes written to ${filePath}`);
            }
          })
        }
      });
    }
  });
}

pageFetcher(args)