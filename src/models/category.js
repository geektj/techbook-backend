const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  imageUrl: {
    type: String,
  },
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
