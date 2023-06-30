const http = require("http");
const app = require("./app");

const PORT = process.env.PORT || 5000;
// creating http server
const server = http.createServer(app);
server.listen(PORT, console.log(`Server is listening on port ${PORT}`));
