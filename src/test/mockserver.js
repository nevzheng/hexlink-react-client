const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

var uuid = require("uuid")

server.use(jsonServer.bodyParser);
server.use(middlewares);
// Custom middleware to access POST methids.
// Can be customized for other HTTP method as well.
server.use((req, res, next) => {
  console.log("POST request listener");
  const body = req.body;
  console.log(body);
  if (req.method === "POST") {
    // add a TimeStamp
    req.body.created = Date.now()
    req.body.code = uuid.v4()
  }
  next();
});


// rewrite the paths
server.use(jsonServer.rewriter({
  "/api/shorten": "/shortUrls"
}))

// Mount on the /api
server.use(router);

console.log(`listening on 8000`);

server.listen(8000, () => {
  console.log("JSON Server is running");
});
