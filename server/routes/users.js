const express = require("express")
const router = express.Router()

router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  if(name && email && password) {
    return res.json(`You have signup with ${name} ${email}`)
  } else {
    return res.json("you need to sign up ")
  }
})

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(email)
  return res.json(`You have signin with ${email} | ${password}`)
})

module.exports = router