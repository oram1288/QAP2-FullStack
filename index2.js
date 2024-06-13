// At first i tried to keep all the code on one .js file, got a bit messy, so then i decided
// to do it the other way after finding the lecture code to have different js files like
// (routes.js, logEvents, etc.). Figured i would still keep this .js file here fo my own use.
// The right file to run is 'index.js', not the 'index2.js'.

// Required modules
const http = require("http");
const fs = require("fs");
const path = require("path");
const EventEmitter = require("events");

// EventEmitter class
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

// Define the port number
const port = 3000;

// Event listeners
myEmitter.on("routeAccessed", (route) => {
  console.log(`Route accessed: ${route}`);
});

myEmitter.on("fileReadSuccess", (filePath) => {
  console.log(`File successfully read: ${filePath}`);
});

myEmitter.on("fileReadError", (filePath) => {
  console.log(`File not available: ${filePath}`);
});

// Function to serve HTML files
function serveFile(filePath, response) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      response.writeHead(500, { "Content-Type": "text/plain" });
      response.write("Internal Server Error");
      response.end();
      myEmitter.emit("fileReadError", filePath);
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data);
      response.end();
      myEmitter.emit("fileReadSuccess", filePath);
    }
  });
}

// Create the server
const server = http.createServer((request, response) => {
  // Get the requested URL
  const url = request.url;
  myEmitter.emit("routeAccessed", url);

  // The file path based on the route
  switch (url) {
    case "/about":
      filePath = path.join(__dirname, "views", "about.html");
      break;
    case "/contact":
      filePath = path.join(__dirname, "views", "contact.html");
      break;
    case "/products":
      filePath = path.join(__dirname, "views", "products.html");
      break;
    case "/subscribe":
      filePath = path.join(__dirname, "views", "subscribe.html");
      break;
    case "/":
      filePath = path.join(__dirname, "views", "index.html");
      break;
    default:
      filePath = path.join(__dirname, "views", "404.html");
      break;
  }

  // Serve the HTML file
  serveFile(filePath, response);
});

// Have the server listen on the correct port
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
