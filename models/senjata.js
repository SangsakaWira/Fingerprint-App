const mongoose = require("mongoose");

const senjataSchema = new mongoose.Schema({
  tipe:String,
  user_id:String
});

module.exports = senjataSchema;