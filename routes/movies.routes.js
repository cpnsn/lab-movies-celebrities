const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/Movie.model");

const router = require("express").Router();

// all your routes here
router.get("/movies/create", async (req, res, next) => {
  const allCelebrities = await Celebrity.find();
  res.render("movies/new-movie", { allCelebrities });
});

//   router.get("/celebrities", async (req, res, next) => {
//     try {
//       const allCelebrities = await Celebrity.find();
//       console.log(allCelebrities);
//       res.render("celebrities/celebrities", { allCelebrities });
//     } catch (error) {
//       console.log(error);
//     }
//   });

router.post("/movies/create", async (req, res, next) => {
  const { title, genre, plot, cast } = req.body;
  try {
    const newMovie = await Movie.create({
      title,
      genre,
      plot,
      cast,
    });
    res.redirect("/movies/movies");
  } catch (error) {
    res.render("movies/new-movie");
  }
});

module.exports = router;
