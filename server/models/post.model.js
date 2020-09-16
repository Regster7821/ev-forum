const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
            required: [
                true,
                '-- a post title required --'
            ],
            minlength: [3, '-- title must be at least 3 characters long --']
    },
    subject: {
        type: String,
            required: [
                true,
                '-- a subject required --'
            ],
            minlength: [3, '-- subject must be at least 3 characters long --']
    },
    body: {
        type: String,
            required: [
                true,
                '-- post content is required --'
            ]
    },
}, { timestamps: true });

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;