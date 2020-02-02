const mongoose = require("mongoose");
const senjataSchema = require("./senjata")

const userSchema = new mongoose.Schema({
    username: {
        unique: true,
        type: String,
        required: true
    },
    fingerprint_id: {
        type: String,
        default:"00"
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    user_id: {
        type: String,
        default:"0"
    },
    senjata: {
        type: [senjataSchema],
        default: []
    }
});

const user = mongoose.model("user", userSchema);

module.exports = user;