require('dotenv').config();
const express = require("express");
const app = express();
const session = require("express-session");
const cookieSession = require("cookie-session");
const passport = require("passport");
const cors = require("cors");
const mongoose = require("mongoose");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require("mongoose-findorcreate");
const path = require('path');

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;
const DB = process.env.DB_ONLINE_URL;
mongoose.set('strictQuery', false);
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Connection Successfull");
}).catch((err) => {
    console.log(err);
})

const userSchema = new mongoose.Schema({
    googleId: String,
    fName: String,
    ccUsername: String,
    cfUsername: String,
    lcUsername: String,
    gfgUsername: String
});

userSchema.plugin(findOrCreate);
const User = new mongoose.model("user", userSchema);

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 100,
    keys: ["secret"],

}));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: "https://cyan-creepy-cougar.cyclic.app",
    methods: "GET, POST, PUT, DELETE",
    credentials: true
}));
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/dashboard",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    scope: ['profile', 'email'],
},
    function (accessToken, refreshToken, profile, cb) {
        User.findOrCreate({ googleId: profile.id, fName: profile.displayName }, function (err, user) {
            return cb(err, user);
        });
    }
));

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});


app.get("/auth/google",
    passport.authenticate("google", { scope: ["profile"] })
);
app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});
app.get("/login/success", function (req, res) {
    console.log(req.user);
    res.status(200).json({
        success: true,
        message: "success",
        user: req.user,
    });
});
app.get("/login/failed", function (req, res) {
    res.status(401).json({
        success: false,
        message: "failure",
    });
});

app.get("/auth/google/dashboard",
    passport.authenticate("google", {
        successRedirect: "/",
        failureRedirect: "/login/failed"
    })
);

app.post("/updateHandles", function (req, res) {
    // console.log(req.body);
    var obj = {};
    if (req.body.cc != "") obj.ccUsername = req.body.cc;
    if (req.body.cf != "") obj.cfUsername = req.body.cf;
    if (req.body.lc != "") obj.lcUsername = req.body.lc;
    if (req.body.gfg != "") obj.gfgUsername = req.body.gfg;
    User.updateOne(
        { googleId: req.body.googleId },
        obj,
        { multi: true },
        function (err, docs) {
            if (!err) {
                console.log("Update success");
            }
            else {
                console.log(err);
            }
        }
    );
}
);
// app.get("*", function (req, res) {
//     res.sendFile(path.join(__dirname, 'client/build/index.html'));
// });
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Connection Successfull");
    app.listen(PORT, function () {
        console.log("Server started listening to port 3000");
    });
}).catch((err) => {
    console.log(err);
});
