const express = require('express');
const router = express.Router();
const dummyData = require('../data/dummyData');

console.log("loading routes");

// Date.prototype.getWeek = function() {
//     var onejan = new Date(this.getFullYear(),0,1);
//     var today = new Date(this.getFullYear(),this.getMonth(),this.getDate());
//     var dayOfYear = ((today - onejan + 86400000)/86400000);
//     return Math.ceil(dayOfYear/7)
//   };
// const todaydate = new Date();
// const dd = todaydate.getDate();
// const mm = todaydate.getMonth() + 1;
// const week = todaydate.getWeek();
// console.log("week",week);
// const today = (dd>10 ? dd : '0'+dd) + '/' + (mm>10 ? mm : '0'+mm) + '/' + todaydate.getFullYear();

// let today_OrderCount = 0;
// let week_OrderCount = 0;

// for(let itr of dummyData){
//     if(itr.OrderDate == today){
//         today_OrderCount += itr.TotalQty;
//     }

//     let itr_date = itr.OrderDate.split('/');
//     let new_date = new Date(+itr_date[2], itr_date[1] - 1, +itr_date[0]);
//     let new_week = new_date.getWeek();

//     if(new_week == week){
//         week_OrderCount += itr.TotalQty;
//     }
// }
// console.log("Total order count : ",today_OrderCount);
// console.log("Total order count : ",week_OrderCount);


// request handler
router.get('/', (req, res) => {
    // console.log(dummyData);
    // console.log("Total order count : ",today_OrderCount);

    res.render('home',{
        data : dummyData
    });
});

module.exports = router;