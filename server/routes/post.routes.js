const PostController = require("../controllers/post.controller");

module.exports = app => {
  app.get("/api/posts/", PostController.getAllPosts);
  app.get("/api/posts/:id", PostController.findOneSinglePost);
  app.post("/api/posts/create", PostController.createNewPost);
  app.delete("/api/posts/delete/:id", PostController.deleteAnExistingPost);
};