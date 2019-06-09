const express = require("express");
const server = express();
const cors = require("cors");

const users = require("./routes/users");
const accountsRouter = require("./data/routes/accounts/accountsRouter.js");
const threadsRouter = require("./data/routes/threads/threadsRouter.js");
const postsRouter = require("./data/routes/posts/postsRouter.js");
const eventsRouter = require("./data/routes/events/eventsRouter.js");
const volunteersRouter = require("./data/routes/volunteers/volunteersRouter.js");

server.use(cors());

// Init Middleware
server.use(express.json({ extended: false }));

server.use("/api/users", users);
server.use("/api/accounts", accountsRouter);
server.use("/api/threads", threadsRouter);
server.use("/api/posts", postsRouter);
server.use("/api/events", eventsRouter);
server.use("/api/volunteers", volunteersRouter);

server.get("/", (req, res) => {
  res.status(200).json({ hello: "Hello World!" });
});

module.exports = server;
