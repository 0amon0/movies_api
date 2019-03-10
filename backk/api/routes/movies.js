const mongoose = require("mongoose");
const router = require("express").Router(); 

const Movie = require("../models/movie");

router.post("/", (req, res, next) => {
  if (!req.body.Title) {
    return res.status(422).json({
      message: "Title is required"
    });
  }
  if (!req.body.Year) {
    return res.status(422).json({
      message: "Year is required" //1aac4421 
    });
  }  
  if (!req.body.imdbID) {
    return res.status(422).json({
      message: "ID is required" 
    });
  }
  if (!req.body.Poster) {
    return res.status(422).json({
      message: "Poster is required" 
    });
  }
  Movie.findOne({imdbID: req.body.imdbID}, function (err, old_imdbID) {
      if(old_imdbID) {
        return res.status(400).json({
          message: "imdbID is already exists!"
        })
      }else {
        const movie = new Movie(req.body);
        return movie
          .save()
          .then(() => res.json({ movie }))
          .catch(next);
      }
  });
});

// GET url 400
router.get("/", (req, res, next) => {
  return Movie.find({})
    .sort({ created_at: "descending" })
    .then(movie => res.json( movie ))
    .catch(next);
});
module.exports = router;