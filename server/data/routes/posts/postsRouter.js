//Import express
const express = require("express");

//Import helper functions
// const threadsDb = require("./threadsDb.js");
const postsDb = require("../posts/postsDb.js");
// const accountsDb = require("../accounts/accountsDb.js");

//Create Router
const router = express.Router();

//Endpoints
router.get("/", async (req, res) => {
  try {
    const posts = await postsDb.getPosts();
    res.status(200).json(posts);
  } catch (err) {
    res
      .status(500)
      .json({ message: "We ran into an error retrieving the posts" });
  }
});

module.exports = router;
