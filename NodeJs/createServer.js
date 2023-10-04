//створюємо сервер за допомогою http

const http = require('http');
const server = http.createServer((request, response) => {
  //server logic

  console.log("Server got the request");

  switch (request.method) {
    case "GET":
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/plain');
      response.end("Hello from GET!");
      break;

    case "POST":
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/plain');
      response.end("Hello from POST!");
      break;
    default:
      break;
  }
});

// тепер сервер треба запустити, запускати можна за дом=помогою:
//server.listen

//start server/127.0.0.1 = localhost
server.listen(5546, 'localhost');