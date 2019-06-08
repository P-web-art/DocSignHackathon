const express = require("express");
const app = express();
const cors = require("cors");

const users = require("./routes/users");
const accountsRouter = require("./data/routes/accounts/accountsRouter.js");

app.use(cors());

// Init Middleware
app.use(express.json({ extended: false }));

app.use("/api/users", users);
app.use("/api/accounts", accountsRouter);

app.listen(5000, () => {
  console.log("running on port 3000");
});
