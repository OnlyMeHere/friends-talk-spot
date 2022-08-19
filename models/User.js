const { Schema, model } = require(mongoose);

// Schema to create User model

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            max_length: 20,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // Vailid: true,
        },
        thoughts: [thoughtsSchema],
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

const User = model('user', userSchema);

module.exports = User;
