const mongoose = require("mongoose");
const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  type: {
    type: String,
  },
  photo: {
    type: String,
  },
  category: {
    type: String,
  },
  desc: {
    type: String,
  },
  recipe: {
    type: String,
  },
});

module.exports = mongoose.model("Recipe", RecipeSchema);
