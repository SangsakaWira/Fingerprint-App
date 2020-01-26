const mongoose = require("mongoose");
const senjataSchema = require("./senjata")

const userSchema = new mongoose.Schema({
    username: {
        unique: true,
        type: String,
        required: true
    },
    fingerprint: {
        type: String
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
    no_peg: {
        type: String
    },
    senjata: {
        type: [senjataSchema],
        default: []
    }
});

const user = mongoose.model("user", userSchema);

module.exports = user;