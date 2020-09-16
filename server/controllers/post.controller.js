const Post = require("../models/post.model");

// module.exports.findAllPosts = (req, res) => {
//   Post.find()
//     .then(allDaPosts => res.json({ posts: allDaPosts }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };
module.exports.getAllPosts = (request, response) => {
  Post.find({})
        .then(posts => response.json(posts))
        .catch(err => response.json(err))
};

module.exports.findOneSinglePost = (req, res) => {
	Post.findOne({ _id: req.params.id })
		.then(oneSinglePost => res.json({ post: oneSinglePost }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewPost = (req, res) => {
  Post.create(req.body)
    .then(newlyCreatedPost => res.json({ post: newlyCreatedPost }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingPost = (req, res) => {
  Post.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
