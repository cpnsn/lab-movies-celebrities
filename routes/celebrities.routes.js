const Celebrity = require("../models/Celebrity.model");

const router = require("express").Router();

// all your routes here
router.get("/celebrities/create", (req, res, next) => {
  res.render("celebrities/new-celebrity");
});

router.get("/celebrities", async (req, res, next) => {
  try {
    const allCelebrities = await Celebrity.find();
    console.log(allCelebrities);
    res.render("celebrities/celebrities", { allCelebrities });
  } catch (error) {
    console.log(error);
  }
});

router.post("/celebrities/create", async (req, res, next) => {
  const { name, occupation, catchphrase } = req.body;
  try {
    const newCelebrity = await Celebrity.create({
      name,
      occupation,
      catchphrase,
    });
    res.redirect("/celebrities/celebrities");
  } catch (error) {
    res.render("celebrities/new-celebrity");
  }
});

module.exports = router;
