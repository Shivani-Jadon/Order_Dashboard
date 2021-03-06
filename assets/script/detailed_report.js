{
    dummyData.sort( (a,b) => {
        let parts = a.OrderDate.split('/');
        const d1 = Number(parts[2] + parts[1] + parts[0]);
        parts = b.OrderDate.split('/');
        const d2 = Number(parts[2] + parts[1] + parts[0]);
        return d1 - d2;
    });

    let index = 1;
    for(let itr of dummyData){
        let table_index = $("<th></th>").text(`${index++}`);
        let table_data1 = $("<td></td>").text(`${itr.UserName}`);
        let table_data2 = $("<td></td>").text(`${itr.OrderNo}`);
        let table_data3 = $("<td></td>").text(`${itr.OrderDate}`);
        let table_data4 = $("<td></td>").text(`${itr.OrderStatus}`);
        let table_data5 = $("<td></td>").text(`${itr.TotalAmount}`);
        let table_data6 = $("<td></td>").text(`${itr.TotalQty}`);

        let new_row = $("<tr></tr>").append(table_index, table_data1, table_data2, table_data3, table_data4, table_data5, table_data6);
        $('#detailed-data').append(new_row);


    }
}