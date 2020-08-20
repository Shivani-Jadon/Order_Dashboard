const express = require('express');
const router = express.Router();
const dummyData = require('../data/dummyData');

console.log("loading routes");

// request handler
router.get('/', (req, res) => {
    console.log(dummyData);
    res.render('home',{
        data : dummyData
    });
});

module.exports = router;