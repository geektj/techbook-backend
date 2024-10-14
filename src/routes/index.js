const express = require('express');
const router = express.Router();


// import controllers
const authController = require('../controller/authController');
const categoriesController = require('../controller/categoryController');


// import middleware

// ----- routes ------ //

// admin routes

router.post('/admin/login', authController.login);
router.post('/category/add', categoriesController.addCategories);


module.exports = router;