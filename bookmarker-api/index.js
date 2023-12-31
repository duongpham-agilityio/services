const json = require("json-server");
const server = json.create();
const router = json.router("db.json");
const middleware = json.defaults();
const PORT = process.env.PORT || 3001;

server.use(middleware);
server.use(router);
server.listen(PORT);
