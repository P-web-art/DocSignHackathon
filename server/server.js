const express = require("express");
const app = express();
const cors = require("cors");

const users= require("./routes/users")

app.use(cors())

// Init Middleware
app.use(express.json({ extended: false }))

app.use("/api/users", users)


app.listen(5000, () => {
  console.log("running on port 3000")
})

