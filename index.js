// Required modules
const http = require("http");

const routes = require("./routes.js");

// Set up for the http server
const server = http.createServer((request, response) => {
  let path = "./views/";

  // The file path based on the route
  switch (request.url) {
    case "/":
      path += "index.html";
      response.statusCode = 200;
      routes.indexPage(path, request.url, response);

      break;
    case "/about":
      path += "about.html";
      response.statusCode = 200;
      routes.aboutPage(path, request.url, response);
      break;

    case "/contact":
      path += "contact.html";
      response.statusCode = 200;
      routes.contactPage(path, request.url, response);
      break;

    case "/products":
      path += "products.html";
      response.statusCode = 200;
      routes.productsPage(path, request.url, response);
      break;

    case "/shoppingcart":
      path += "shoppingcart.html";
      response.statusCode = 200;
      routes.shoppingcartPage(path, request.url, response);
      break;

    case "/checkout":
      path += "checkout.html";
      response.statusCode = 200;
      routes.checkoutPage(path, request.url, response);
      break;

    case "/subscribe":
      path += "subscribe.html";
      response.statusCode = 200;
      routes.subscribePage(path, request.url, response);
      break;

    default:
      path += "404.html";
      response.statusCode = 404;
      routes.fourOfourPage(path, request.url, response);

      break;
  }
});

// Have the server listen on the correct port
server.listen(3000, "localhost", () => {
  console.log("Server is running on port 3000");
});
