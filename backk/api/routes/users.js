const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const User = require("../models/user");


router.get('/users',(req,res,next) => {
  return User.find({})
    .sort({ created_at: "descending" }) 
    .then(user => res.json( user ))
    .catch(next);
})


router.post("/signup", (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "Mail exists"
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              email: req.body.email,
              password: hash
            });
            user
              .save()
              .then(result => {
                console.log(result);
                res.status(201).json({
                  message: "User created"
                });
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                });
              });
          }
        });
      }
    });
});


router.post("/signin", (req, res, next) => {
  if (!req.body.email) {
    return res.status(422).json({
      message: "Email is required"
    });
  }
  if (!req.body.password) {
    return res.status(422).json({
      message: "Password is required" //1aac4421 
    });
  }
  User.findOne({email: req.body.email}, function (err, _user) {
        bcrypt.compare(req.body.password, _user.password, function(err, response) {
          if(response) {
            return res.status(200).json({
               message: _user
            })
          } else { 
            return res.status(400).json({message:"Email Or Password Is Wrong!"})
          } 
        });
  });
});



router.delete("/:userId", (req, res, next) => {
  User.remove({ _id: req.params.userId })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "User deleted"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;