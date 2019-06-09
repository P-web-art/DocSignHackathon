//Import express
const express = require("express");

//Import helper functions
const eventsDb = require("./eventsDb.js");

//Create Router
const router = express.Router();

//Endpoints
router.get("/", async (req, res) => {
  try {
    const events = await eventsDb.getEvents();
    res.status(200).json(events);
  } catch (err) {
    res
      .status(500)
      .json({ message: "We ran into an error retrieving the project" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const event = await eventsDb.getEventById(id);
    if (event) {
      res.status(200).json(event);
    } else {
      res.status(404).json({ message: "Invalid ID" });
    }
  } catch (err) {
    res.status(500).json({
      message: "Error retrieving event"
    });
  }
});

router.post("/", async (req, res) => {
  const event = req.body;
  try {
    const addedEvent = await eventsDb.addEvent(event);
    res.status(200).json(addedEvent);
  } catch (err) {
    res.status(500).json({
      message: "Error adding post"
    });
  }
});

module.exports = router;
