// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('./db.json');
// const middlewares = jsonServer.defaults({
//   static: './build'
// });
// const PORT = process.env.PORT || 3000;
// server.use(middlewares);
// server.use(jsonServer.rewriter({
//   '/api/*': '/$1',
// }))
// server.use(router);
// server.listen(PORT, () => {
//   console.log('Server is running');
// });
// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(require("db.json")());
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Have all URLS prefixed with a /api
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);

server.use(router);
server.listen(5000, () => {
  console.log("JSON Server is running");
});