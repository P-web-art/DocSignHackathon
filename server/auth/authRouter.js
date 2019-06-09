//* import bcryptjs
const bcrypt = require("bcryptjs");

//* import token generator function
// const tokenService = require("./tokenService");

//Import account helper functions
const accountDb = require("../data/routes/accounts/accountsDb.js");

//* create router
const express = require("express");
const router = express.Router();

//Register Endpoint
router.post("/register", async (req, res) => {
  const credentials = req.body;

  //* override password w/hash
  const hash = bcrypt.hashSync(credentials.password, 10);
  credentials.password = hash;

  //Add need account
  try {
    const newAccount = accountDb.addAccount(credentials);
    if (newAccount) {
      res.status(201).json(newAccount);
    } else {
      res.status(500).json({ message: "Unable to register new account" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Login Endpoint
//* create business login endpoint
router.get("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    //* grab the business from db if exists
    const business = await businessesDb.getBusinessByEmail(email);
    if (business && bcrypt.compareSync(password, business.password)) {
      //* generate token
      const token = tokenService.generateToken(business);
      res.status(200).json({
        ...business,
        token,
        message: `Welcome ${business.companyName}`
      });
    } else {
      res
        .status(404)
        .json({ error: "Invalid credentials. Check email or password" });
    }
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

module.exports = router;
