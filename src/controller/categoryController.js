const Category = require("../models/category");

const addCategories = async (req, res) => {
  try {
    const { categories } = req.body;

    if (!Array.isArray(categories)) {
      return res.status(400).json({ error: "Categories should be an array" });
    }

    // const results = {
    //   created: [],
    //   duplicates: [],
    // };

    // for (const category of categories) {
    //   const existingCategory = await Category.findOne({ name: category.name });
    //   if (existingCategory) {
    //     results.duplicates.push(category.name);
    //   } else {
    //     const createdCategories = await Category.create({category});
    //     results.created.push({
    //       id: createdCategories.id,
    //       name: createdCategories.name,
    //       description: createdCategories.description,
    //       image: createdCategories.image,
    //     });
    //   }
    // }

    // if (results.duplicates.length > 0) {
    //   return res.status(400).json({
    //     error: "Categories already exist",
    //     duplicates: results.duplicates,
    //     created: results.created,
    //   });
    // }

    // res.status(201).json({
    //   message: "Categories added successfully",
    //   categories: results.created,
    // });

    const createdCategories = await Category.create(categories);

    res.status(201).json({
      message: "Categories added successfully",
      categories: createdCategories.map((cat) => ({
        id: cat.id,
        categoryName: cat.categoryName,
        description: cat.description,
        image: cat.image,
      })),
    });
  } catch (error) {
    if (error.code === 11000) {
      return res
        .status(400)
        .json({ error: "One or more categories already exist" });
    }
    console.log("Error adding categories:", error);
    res
      .status(500)
      .json({ error: "An error occurred while adding categories" });
  }
};

module.exports = {
  addCategories,
};
