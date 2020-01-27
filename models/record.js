const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  tanggal:String,
  status:{
      type:Boolean,
      default:false
  },
  user_id:String
});

const record = mongoose.model("record", recordSchema);

module.exports = record;