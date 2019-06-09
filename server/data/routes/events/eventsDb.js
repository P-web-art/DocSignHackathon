const db = require("../../dbConfig.js");

const getEvents = () => {
  return db("events");
};

const getEventById = id => {
  return db("events")
    .where("id", id) //* returns Event within array
    .first();
};

const addEvent = event => {
  return db("events")
    .insert(event)
    .then(ids => {
      return getEventById(ids[0]);
    });
};

const updateEvent = (id, event) => {
  return db("Events")
    .update(event)
    .where("id", id) //* returns count of updated
    .then(event => {
      return this.getEventById(id);
    });
};

const deleteEvent = id => {
  return db("events")
    .where("id", id)
    .del(); //* returns count of deleted
};

module.exports = {
  getEvents,
  getEventById,
  addEvent,
  deleteEvent,
  updateEvent
};