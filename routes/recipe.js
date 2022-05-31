const Recipe = require("../models/Recipe");
const router = require("express").Router();

router.post("/", async (req, res, next) => {
  const newRecipe = new Recipe(req.body);

  try {
    const savedRecipe = await newRecipe.save();
    res.status(200).json(savedRecipe);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/find/:id", async (req, res, next) => {
  try {
    const Recipes = await Recipe.findOne({ _id: req.params.id });
    res.status(200).json(Recipes);
  } catch (err) {
    res.status(400).json({ messgae: err });
  }
});

router.get("/", async (req, res, next) => {
  try {
    const Recipes = await Recipe.find();
    res.status(200).json(Recipes);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/category", async (req, res, next) => {
  try {
    const list = await Recipe.find({ category: req.query.category });
    res.status(200).json(list);
  } catch (err) {
    res.status(400).json({ messgae: err });
  }
});

module.exports = router;
