const express = require("express");
const server = express();
const cors = require("cors");

const users = require("./routes/users");
const accountsRouter = require("./data/routes/accounts/accountsRouter.js");
const threadsRouter = require("./data/routes/threads/threadsRouter.js");

server.use(cors());

// Init Middleware
server.use(express.json({ extended: false }));

server.use("/api/users", users);
server.use("/api/accounts", accountsRouter);
server.use("/api/threads", threadsRouter);

server.get("/", (req, res) => {
  res.status(200).json({ hello: "Hello World!" });
});

module.exports = server;
