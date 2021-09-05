const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json'); //./src/server/db.js
const PORT = process.env.PORT || 4000; 
const middlewares = jsonServer.defaults({
  static: './build'
});
server.use(jsonServer.rewriter({
  '/api/*': '/$1',
}))

server.use(router);
server.listen(PORT, () => {
  console.log('Server is running');
});

