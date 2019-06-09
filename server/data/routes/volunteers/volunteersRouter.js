//Import express
const express = require("express");

//Import helper functions
const volunteersDb = require("./volunteersDb.js");

//Create Router
const router = express.Router();

//Endpoints
router.get("/", async (req, res) => {
  try {
    const volunteers = await volunteersDb.getVolunteers();
    res.status(200).json(volunteers);
  } catch (err) {
    res
      .status(500)
      .json({ message: "We ran into an error retrieving the volunteers" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const volunteer = await volunteersDb.getVolunteerById(id);
    if (volunteer) {
      res.status(200).json(volunteer);
    } else {
      res.status(404).json({ message: "Invalid ID" });
    }
  } catch (err) {
    res.status(500).json({
      message: "Error retrieving volunteer"
    });
  }
});

router.post("/", async (req, res) => {
  const volunteer = req.body;
  try {
    const addedVolunteer = await volunteersDb.addVolunteer(volunteer);
    res.status(200).json(addedVolunteer);
  } catch (err) {
    res.status(500).json({
      message: "Error adding volunteer"
    });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(404).json({ message: "missing ID or wrong ID" });
  } else {
    try {
      const deletedVolunteer = await volunteersDb.deleteVolunteer(id);
      res.status(204).json(deletedVolunteer);
    } catch (err) {
      res.status(500).json({
        message: "Error deleting volunteer"
      });
    }
  }
});
module.exports = router;