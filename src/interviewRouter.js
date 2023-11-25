const express = require('express');
const studentController = require('./controllers/studentController');
const router = express.Router();

//interview router
router.get('/interview', controller.getPosts(), (req, res) => {
    res.send()
})