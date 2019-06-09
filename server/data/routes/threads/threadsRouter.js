//Import express
const express = require("express");

//Import helper functions
const threadsDb = require("./threadsDb.js");
const postsDb = require("../posts/postsDb.js");

//Create Router
const router = express.Router();

//Endpoints
router.get("/", async (req, res) => {
  try {
    const threads = await threadsDb.getthreads();
    res.status(200).json(threads);
  } catch (err) {
    res
      .status(500)
      .json({ message: "We ran into an error retrieving the threads" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const thread = await threadsDb.get(id);
    if (thread) {
      res.status(200).json(thread);
    } else {
      res.status(404).json({ message: "Invalid ID" });
    }
  } catch (err) {
    res.status(500).json({
      message: "Error retrieving thread"
    });
  }
});

//List posts with specified thread id
server.get("/api/threads/:id/posts", async (req, res) => {
  try {
    //Joins the two tables together, and uses the thread_id foreign key to match id of threads and returns data
    const posts = await postsDb("posts as p")
      .join("threads as t", "t.id", "p.thread_id")
      .select("p.*")
      .where("p.thread_id", req.params.id);
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  const thread = req.body;
  try {
    const addThread = await threadsDb.addThread(thread);
    res.status(200).json(addThread);
  } catch (err) {
    res.status(500).json({
      message: "Error adding thread"
    });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(404).json({ message: "missing ID or wrong ID" });
  } else {
    try {
      const deletedThread = await threadsDb.deleteThread(id);
      res.status(204).json(deletedthread);
    } catch (err) {
      res.status(500).json({
        message: "Error deleting thread"
      });
    }
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatingThread = await threadsDb.updateThread(id, req.body);
    res.status(200).json(updatingThread);
  } catch (err) {
    res.status(500).json({
      message: "Error updating thread"
    });
  }
});

module.exports = router;
