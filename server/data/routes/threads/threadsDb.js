const db = require("../../dbConfig.js");

const getThreads = () => {
  return db("threads");
};

const getThreadById = id => {
  return db("threads")
    .where("id", id) //* returns Thread within array
    .first();
};

const addThread = thread => {
  return db("threads")
    .insert(thread)
    .then(ids => {
      return getThreadById(ids[0]);
    });
};

const updateThread = (id, thread) => {
  return db("threads")
    .update(thread)
    .where("id", id) //* returns count of updated
    .then(thread => {
      return this.getThreadById(id);
    });
};

const deleteThread = id => {
  return db("threads")
    .where("id", id)
    .del(); //* returns count of deleted
};

module.exports = {
  getThreads,
  getThreadById,
  addThread,
  deleteThread,
  updateThread
};
