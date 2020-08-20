const fs = require('fs');
const dummyjson = require('dummy-json');
 
const template = fs.readFileSync('mytemplate.hbs', { encoding: 'utf8' });
// random data in json format
const result = dummyjson.parse(template);

console.log(result);

/* Template for genarating random data */

// {
//     {{#repeat 25}}
//     {
//         "User Name" : "{{firstName}} {{lastName}}",
//         "Order No" : "{{int 200 4000}}",
//         "Order Date" : "{{date '2020-01-01' '2020-08-21' 'DD/MM/YYYY'}}",
//         "Order Status" : {{boolean}},
//         "Total Qty" : {{int 1 50}},
//         "Total Amount" : {{int 2000 80000}},
//         "City" : "{{city}}"
//     }
//     {{/repeat}}
// }

// Note : We have generated data using dummy-json and kept it in a static json file 
// So that refreshing the server doesn't change the randomly generated data