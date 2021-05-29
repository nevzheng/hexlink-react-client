const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middlewares);
// Custom middleware to access POST methids.
// Can be customized for other HTTP method as well.
server.use((req, res, next) => {
  console.log("POST request listener");
  const body = req.body;
  console.log(body);
  if (req.method === "POST") {
    // If the method is a POST echo back the name from request body
    res.json({ code: "1234" });
  } else {
    //Not a post request. Let db.json handle it
    next();
  }
});

server.use(router);

const port = process.env.MOCK_PORT ? process.env.MOCK_PORT : "8080";
console.log(`listening on ${port}`);

server.listen(parseInt(port, 10), () => {
  console.log("JSON Server is running");
});
