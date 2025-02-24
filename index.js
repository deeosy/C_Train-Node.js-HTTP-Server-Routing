const http= require("http");
// const fs = require('fs');
// const path = require('path');

const handleAllRequest = (req, res) => {
  const url = req.url;
  const time = new Date().toLocaleTimeString()
  
  res.writeHead(200, { "Content-Type": "text/html" });

  if(url === "/"|| url === "/home"){
    res.write("<h1>Welcome to my Node.js Server</h1>")
    // // how to read file index.html
    // fs.readFile(path.join())

  } else if (url === '/about'){
    res.write("<h1>This is the About page</h1>")
  } else if (url === '/contact'){
    res.write("<h1>Contact us at: deeosy2@gmail.com </h1>")
  }else if (url === '/services'){
    res.write("<h1>We offer Web Development and Mobile App Development services</h1>")
  }else if (url === '/time'){
    res.write(`<h1>Current time: ${time} </h1>`)
  } else{
    res.write("<h1> 404 Page Not Found </h1>")
  }

  res.end();
}

const server = http.createServer(handleAllRequest);


server.listen(5000, "127.0.0.1", () => {
  console.log("Hi, am your server running on port 5000!");
  
})

