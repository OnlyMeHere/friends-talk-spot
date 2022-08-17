const { Schema, model } = require('mongoose');

// Schema to create Thoughts model

const thoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        CreatedAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// Getter - formats the timestamp on Thoughts

postSchema
    .virtual('CreatedAt')
    .get(function () {
        return this.thoughts.CreatedAt;
    });

// Intialize Thoughts model

const Thoughts = model('thoughts', postSchema);

module.exports = Thoughts;