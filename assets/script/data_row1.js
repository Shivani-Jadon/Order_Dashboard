{
    Date.prototype.getWeek = function() {
        var onejan = new Date(this.getFullYear(),0,1);
        var today = new Date(this.getFullYear(),this.getMonth(),this.getDate());
        var dayOfYear = ((today - onejan + 86400000)/86400000);
        return Math.ceil(dayOfYear/7)
      };
    const todaydate = new Date();
    const dd = todaydate.getDate();
    const mm = todaydate.getMonth() + 1;
    const week = todaydate.getWeek();
    console.log("week",week);
    const today = (dd>10 ? dd : '0'+dd) + '/' + (mm>10 ? mm : '0'+mm) + '/' + todaydate.getFullYear();
    
    let today_OrderCount = 0;
    let today_OrderAmount = 0;
    let week_OrderCount = 0;
    let week_OrderAmount = 0;
    let month_OrderCount = 0;
    let month_OrderAmount = 0;
    let prev_monthCount = 0;
    let prev_monthAmount = 0;
    
    for(let itr of dummyData){
        // calculating order for today
        if(itr.OrderDate == today){
            today_OrderCount += +itr.TotalQty;
            today_OrderAmount += +itr.TotalAmount;
        }
    
        
        let itr_date = itr.OrderDate.split('/');
        let new_date = new Date(+itr_date[2], itr_date[1] - 1, +itr_date[0]);
        let new_week = new_date.getWeek();
    
        // calculating order for week
        if(new_week == week){
            week_OrderCount += +itr.TotalQty;
            week_OrderAmount += +itr.TotalAmount;
        }

        // calculating order for this month 
        let cur_month = itr_date[1];
        if(cur_month == mm){
            month_OrderCount += +itr.TotalQty;
            month_OrderAmount += +itr.TotalAmount;
        }

        // calculating order for previous month
        if(cur_month == mm-1){
            prev_monthCount += +itr.TotalQty;
            prev_monthAmount += +itr.TotalAmount;
        }
    }

    console.log("Total order count : ",today_OrderCount, week_OrderCount);
    console.log("Total order amount : ",today_OrderAmount, week_OrderAmount);
    console.log("Month : ", month_OrderAmount, month_OrderCount);
    console.log("Prev_month : ", prev_monthAmount, prev_monthCount);


    $('#today-order-count').text(`${today_OrderCount}`);
    $('#week-order-count').text(`${week_OrderCount}`);
    $('#today-order-amount').text(`${today_OrderAmount}`);
    $('#week-order-amount').text(`${week_OrderAmount}`);
    $('#month-oc').text(`${month_OrderCount}`);
    $('#prev-month-oc').text(`${prev_monthCount}`);
    $('#month-oa').text(`${month_OrderAmount}`);
    $('#prev-month-oa').text(`${prev_monthAmount}`);
}