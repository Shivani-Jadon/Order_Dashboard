{
    // sorting data based on arder qty
    dummyData.sort((a,b) => {
        return b.TotalQty - a.TotalQty;
    });

    // appending top 5 orders in the table
    for(let top=0; top<5; top++){
        // console.log(dummyData[top]);
        let table_index = $("<th></th>").text(`${top+1}`);
        let table_data1 = $("<td></td>").text(`${dummyData[top].OrderNo}`);
        let table_data2 = $("<td></td>").text(`${dummyData[top].TotalAmount}`);
        let table_data3 = $("<td></td>").text(`${dummyData[top].TotalQty}`);
        let table_data4 = $("<td></td>").text(`${dummyData[top].UserName}`);

        let new_row = $("<tr></tr>").append(table_index, table_data1, table_data2, table_data3, table_data4);
        $('#top-order-data').append(new_row);
    }

    // appending bottom 5 orders in the table
    for(let bottom=dummyData.length-1; bottom>dummyData.length-6; bottom--){
        // console.log(dummyData[bottom]);
        let table_index = $("<th></th>").text(`${bottom+1}`);
        let table_data1 = $("<td></td>").text(`${dummyData[bottom].OrderNo}`);
        let table_data2 = $("<td></td>").text(`${dummyData[bottom].TotalAmount}`);
        let table_data3 = $("<td></td>").text(`${dummyData[bottom].TotalQty}`);
        let table_data4 = $("<td></td>").text(`${dummyData[bottom].UserName}`);

        let new_row = $("<tr></tr>").append(table_index, table_data1, table_data2, table_data3, table_data4);
        $('#bottom-order-data').append(new_row);
    }
}