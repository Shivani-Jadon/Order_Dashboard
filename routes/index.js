const express = require('express');
const router = express.Router();
const dummyData = require('../data/dummyData');

console.log("loading routes");


// request handler
router.get('/', (req, res) => {
    
    res.render('home',{
        data : dummyData
    });
});

module.exports = router;