const db = require("../../dbConfig.js");

const getVolunteers = () => {
  return db("volunteers as v")
    .join("accounts as a", "a.id", "=", "v.account_id")
    .select("v.*", "a.name");
};

const getVolunteerById = id => {
  return db("volunteers as v")
    .join("accounts as a", "a.id", "=", "v.account_id")
    .select("v.*", "a.name")
    .where("v.id", id) //* returns Account within array
    .first();
};

const addVolunteer = Volunteer => {
  return db("volunteers")
    .insert(Volunteer)
    .then(ids => {
      return getVolunteerById(ids[0]);
    });
};

const updateVolunteer = (id, Volunteer) => {
  return db("volunteers")
    .update(volunteer)
    .where("id", id) //* returns count of updated
    .then(volunteer => {
      return this.getVolunteerById(id);
    });
};

const deleteVolunteer = id => {
  return db("volunteers")
    .where("id", id)
    .del(); //* returns count of deleted
};

module.exports = {
  getVolunteers,
  getVolunteerById,
  addVolunteer,
  deleteVolunteer,
  updateVolunteer
};
