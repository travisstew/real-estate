const express = require('express');
const router = express.Router();


const {getListing, getListings} = require('../controllers/listingsController');

router.get('/api/listings',getListings);

router.get('/listing/:id', getListing );




module.exports = router;
