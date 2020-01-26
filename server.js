const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const flash = require('connect-flash');
const bodyParser = require("body-parser");
const MongoDBStore = require("connect-mongodb-session")(session);

const userRouter = require("./routes/user")

const URI = "mongodb://localhost/fingerprint-app"

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const store = new MongoDBStore({
    uri: URI,
    collection: "sessions"
});

const app = express()

app.use(
    session({
        secret: "mysecret",
        resave: false,
        saveUninitialized: false,
        store: store
    })
);

app.use(flash());

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use("/user",userRouter)

app.listen(7500, () => {
    console.log("Server is running!")
})