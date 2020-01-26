const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  tanggal:String,
  status:String,
  user_id:String,
  pukul:String
});

const record = mongoose.model("record", recordSchema);

module.exports = record;