//Import express
const express = require("express");

//Import helper functions
const accountsDb = require("./accountsDb.js");

//Create Router
const router = express.Router();

//Endpoints
router.get("/", async (req, res) => {
  try {
    const accounts = await accountsDb.getAccounts();
    res.status(200).json(accounts);
  } catch (err) {
    res
      .status(500)
      .json({ message: "We ran into an error retrieving the project" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const account = await accountsDb.get(id);
    if (account) {
      res.status(200).json(account);
    } else {
      res.status(404).json({ message: "Invalid ID" });
    }
  } catch (err) {
    res.status(500).json({
      message: "Error retrieving account"
    });
  }
});

router.post("/", async (req, res) => {
  const account = req.body;
  if (!account.email) {
    res.status(404).json({ message: "Missing account email" });
  } else if (!account.name) {
    res.status(404).json({ message: "Missing account name" });
  } else if (!account.password) {
    res.status(404).json({ message: "Missing password" });
  } else {
    try {
      const addingAccount = await accountsDb.addingAccount(account);
      res.status(200).json(addingAccount);
    } catch (err) {
      res.status(500).json({
        message: "Error adding account"
      });
    }
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(404).json({ message: "missing ID or wrong ID" });
  } else {
    try {
      const deletedAccount = await accountsDb.deleteAccount(id);
      res.status(204).json(deletedAccount);
    } catch (err) {
      res.status(500).json({
        message: "Error deleting account"
      });
    }
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(404).json({ message: "missing ID or wrong ID" });
  } else if (!req.body.name || !req.body.email || !req.body.password) {
    res.status(404).json({ message: "Missing name or email or password" });
  } else {
    try {
      const updatingAccount = await accountsDb.updateAccount(id, req.body);
      res.status(200).json(updatingAccount);
    } catch (err) {
      res.status(500).json({
        message: "Error updating account"
      });
    }
  }
});

module.exports = router;
