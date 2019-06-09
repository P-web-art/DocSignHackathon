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

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await postsDb.getPostById(id);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: "Invalid ID" });
    }
  } catch (err) {
    res.status(500).json({
      message: "Error retrieving post"
    });
  }
});

router.post("/", async (req, res) => {
  const post = req.body;
  try {
    const addPost = await postsDb.addPost(post);
    res.status(200).json(addPost);
  } catch (err) {
    res.status(500).json({
      message: "Error adding post"
    });
  }
});

module.exports = router;