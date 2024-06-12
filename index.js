// Import the http module
const http = require("http");
const fs = require("fs");

// Create the server
const server = http.createServer((request, response) => {
  // Use a switch statement to handle different routes
  switch (request.url) {
    case "/about":
      console.log("Accessed the About page");
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.write("Welcome to the About page");
      break;
    case "/contact":
      console.log("Accessed the Contact page");
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.write("Welcome to the Contact page");
      break;
    case "/products":
      console.log("Accessed the Products page");
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.write("Welcome to the Products page");
      break;
    case "/":
      console.log("Accessed the Home page");
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.write("Welcome to the Home page");
      break;
    case "/subscribe":
      console.log("Accessed the Subscribe page");
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.write("Welcome to the Subscribe page");
      break;
    default:
      console.log("Page not found");
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.write("404 Page Not Found");
      break;
  }
});

// Have the server listen on the correct port
server.listen(3000, "localhost", () => {
  console.log("listening on port 3000.");
});
