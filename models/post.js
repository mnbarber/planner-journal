const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
            enum: ['Journal', 'Book Review', 'Show Review', 'Movie Review'],
        },
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    },
    { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;