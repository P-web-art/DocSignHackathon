const db = require("../../dbConfig.js");

const getPosts = () => {
  return db("posts");
};

const getPostById = id => {
  return db("posts")
    .where("id", id) //* returns Post within array
    .first();
};

const addPost = post => {
  return db("posts")
    .insert(post)
    .then(ids => {
      return getPostById(ids[0]);
    });
};

const updatePost = (id, post) => {
  return db("posts")
    .update(post)
    .where("id", id) //* returns count of updated
    .then(post => {
      return this.getPostById(id);
    });
};

const deletePost = id => {
  return db("posts")
    .where("id", id)
    .del(); //* returns count of deleted
};

module.exports = {
  getPosts,
  getPostById,
  addPost,
  deletePost,
  updatePost
};
