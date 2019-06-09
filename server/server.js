const express = require("express");
const server = express();
const cors = require("cors");

const users = require("./routes/users");
const accountsRouter = require("./data/routes/accounts/accountsRouter.js");
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> a81bc4ab62e679bd38cab8fd3e55f3d7cd23f947
const threadsRouter = require("./data/routes/threads/threadsRouter.js");
const postsRouter = require("./data/routes/posts/postsRouter.js");
const eventsRouter = require("./data/routes/events/eventsRouter.js");
const volunteersRouter = require("./data/routes/volunteers/volunteersRouter.js");
const authRouter = require("./auth/authRouter.js");
<<<<<<< HEAD
>>>>>>> 6b99dd8be3ce898507ed21f27474c3ba638baa98
=======
>>>>>>> a81bc4ab62e679bd38cab8fd3e55f3d7cd23f947

server.use(cors());

// Init Middleware
server.use(express.json({ extended: false }));

server.use("/api/users", users);
server.use("/api/accounts", accountsRouter);
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> a81bc4ab62e679bd38cab8fd3e55f3d7cd23f947
server.use("/api/threads", threadsRouter);
server.use("/api/posts", postsRouter);
server.use("/api/events", eventsRouter);
server.use("/api/volunteers", volunteersRouter);
server.use("/bus/", authRouter);
<<<<<<< HEAD
>>>>>>> 6b99dd8be3ce898507ed21f27474c3ba638baa98
=======
>>>>>>> a81bc4ab62e679bd38cab8fd3e55f3d7cd23f947

server.get("/", (req, res) => {
  res.status(200).json({ hello: "Hello World! Hi Hi" });
});

module.exports = server;
