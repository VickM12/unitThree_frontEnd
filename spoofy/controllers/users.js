const express = require('express')
const UserRouter = express.Router();
const jwt = require('jwt-simple');// creates tokens for useres when they sign in
const bcrypt = require('bcrypt'); //hashes passowerd what will store in our database
const pass = require('../config/passport.js');
const config = require('../config/config');
const User = require('../models/user.js');


//User create route aka sign-up///

UserRouter.post("/signup", (req, res) => {
    console.log(req.body);
    if (req.body.email && req.body.password) {

      // Hash the password:
      req.body.password = bcrypt.hashSync(
        req.body.password,
        bcrypt.genSaltSync(10)
      );

      User.findOne({ email: req.body.email }, (user) => {
        console.log("========findOne=======", user);
        if (!user) {
          console.log("Running create user");
          User.create(req.body, (error, createdUser) => {
            console.log("createdUser", createdUser);
            console.log("error", error);
            if (createdUser) {
              let payload = {
                id: createdUser.id,
                email: createdUser.email
              };
              console.log(payload);
              let token = jwt.encode(payload, config.jwtSecret);
              console.log(token);
              res.json({
                token: token,
              });
            } else {
              console.log("failed to create user")
              alert("failed to create user");
              res.sendStatus(401);
            }
          });
        } else {
          console.log("User already exists, try logging in instead");
          alert("User already exists, try logging in instead");
          res.sendStatus(401);
        }
      });
    } else {
      res.sendStatus(401);
    }
  });

  //User sign-in route//
  UserRouter.post("/login", (req, res) => {
    if (req.body.email && req.body.password) {
      console.log(req.body.email);
      User.findOne({ email: req.body.email }, (error, user) => {
        if (error) console.log(error);
        if (user) {
          console.log("Found user. Checking password...");
          if (bcrypt.compareSync(req.body.password, user.password)) {
            console.log("Password correct, generating JWT...");
            let payload = {
              id: user.id,
              email: user.email
            };
            let token = jwt.encode(payload, config.jwtSecret);
            console.log(token);
            res.json({
              token: token,
            });
          } else {
            console.log("Wrong password")
            alert("Wrong password");
            res.sendStatus(401);
          }
        } else {
          console.log("Couldn't find user. Try signing up.");
          alert("Couldn't find user. Try signing up.");
          res.sendStatus(401);
        }
      });
    } else {
      res.sendStatus(401);
    }
  });

module.exports = UserRouter
