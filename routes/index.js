const express = require('express');
const router = express.Router();
const dummyData = require('../data/dummyData');

console.log("loading routes");


// request handler
router.get('/', (req, res) => {
    let total_Product_count = 0;
    for(let iterator of dummyData){
        total_Product_count += iterator.TotalQty;
    }
    console.log("TPC : ", total_Product_count);

    res.render('home',{
        data : dummyData,
        total_ProductCount : total_Product_count
    });
});

module.exports = router;