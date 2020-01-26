const mongoose = require("mongoose");

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true  ,useCreateIndex: true});

module.exports = {
    mongoose
}