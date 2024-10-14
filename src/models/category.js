const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    // categoryId: {
    //     type: Number,
    //     requ
    // },
    categoryName: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      unique: true,
      trim: true,
    },
    imageUrl: {
      type: String,
      default: null, // URL to the image
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// Virtual for id
categorySchema.virtual("id").get(function () {
  return this._id.toHexString();
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
