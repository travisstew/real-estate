const express = require('express');
const router = express.Router();

const {getListing} = require('../controllers/listingsController');


router.get('/listing/:id', getListing );


module.exports = router;
