const express = require('express');
const router = express.Router();


// import controllers
const authController = require('../controller/authController')


// import middleware

// ----- routes ------ //

// admin routes

router.post('/admin/login', authController.login);


module.exports = router;