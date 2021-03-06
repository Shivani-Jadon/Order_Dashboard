const todaydate = new Date();
const dd = todaydate.getDate();
const mm = todaydate.getMonth() + 1;
const today = (dd>10 ? dd : '0'+dd) + '/' + (mm>10 ? mm : '0'+mm) + '/' + todaydate.getFullYear();

// the data is in json format
const dataFile = [
    {
        "UserName" : "Rosie Murphy",
        "OrderNo" : "1868",
        "OrderDate" : "25/02/2020",
        "OrderStatus" : "Confirm",
        "TotalQty" : 31,
        "TotalAmount" : 59499,
        "City" : "Brisbane"
    },
    {
        "UserName" : "Vaughn Paquette",
        "OrderNo" : "616",
        "OrderDate" : "08/03/2020",
        "OrderStatus" : "Confirm",
        "TotalQty" : 14,
        "TotalAmount" : 37515,
        "City" : "Wilmington"
    },
    {
        "UserName" : "Stan Miers",
        "OrderNo" : "2649",
        "OrderDate" : "13/06/2020",
        "OrderStatus" : "Confirm",
        "TotalQty" : 28,
        "TotalAmount" : 64436,
        "City" : "Sheffield"
    },
    {
        "UserName" : "Liza Cumbie",
        "OrderNo" : "3039",
        "OrderDate" : "15/08/2020",
        "OrderStatus" : "Confirm",
        "TotalQty" : 33,
        "TotalAmount" : 74097,
        "City" : "Dayton"
    },
    {
        "UserName" : "Michael Keesee",
        "OrderNo" : "214",
        "OrderDate" : "08/02/2020",
        "OrderStatus" : "Confirm",
        "TotalQty" : 35,
        "TotalAmount" : 58969,
        "City" : "Brighton"
    },
    {
        "UserName" : "Francis Lenihan",
        "OrderNo" : "2026",
        "OrderDate" : "31/07/2020",
        "OrderStatus" : "Confirm",
        "TotalQty" : 10,
        "TotalAmount" : 6736,
        "City" : "Aspen"
    },
    {
        "UserName" : "Eleanore Helland",
        "OrderNo" : "3997",
        "OrderDate" : "26/03/2020",
        "OrderStatus" : "Confirm",
        "TotalQty" : 1,
        "TotalAmount" : 68554,
        "City" : "Telford"
    },
    {
        "UserName" : "Richelle Gilmore",
        "OrderNo" : "1564",
        "OrderDate" : "26/06/2020",
        "OrderStatus" : "Confirm",
        "TotalQty" : 36,
        "TotalAmount" : 41191,
        "City" : "Newark"
    },
    {
        "UserName" : "Kurt Connor",
        "OrderNo" : "3777",
        "OrderDate" : "20/02/2020",
        "OrderStatus" : "Confirm",
        "TotalQty" : 25,
        "TotalAmount" : 34963,
        "City" : "Canterbury"
    },
    {
        "UserName" : "Michael Neal",
        "OrderNo" : "2380",
        "OrderDate" : "14/03/2020",
        "OrderStatus" : "Confirm",
        "TotalQty" : 49,
        "TotalAmount" : 77530,
        "City" : "Toledo"
    },
    {
        "UserName" : "Lloyd Kelsey",
        "OrderNo" : "3540",
        "OrderDate" : "03/04/2020",
        "OrderStatus" : "Confirm",
        "TotalQty" : 19,
        "TotalAmount" : 35029,
        "City" : "Orlando"
    },
    {
        "UserName" : "Katelin Paquette",
        "OrderNo" : "1461",
        "OrderDate" : "20/06/2020",
        "OrderStatus" : "Confirm",
        "TotalQty" : 14,
        "TotalAmount" : 64621,
        "City" : "Walkerville"
    },
    {
        "UserName" : "Cyrus White",
        "OrderNo" : "2426",
        "OrderDate" : "08/05/2020",
        "OrderStatus" : "Confirm",
        "TotalQty" : 34,
        "TotalAmount" : 44481,
        "City" : "Pheonix"
    },
    {
        "UserName" : "Katelin Verde",
        "OrderNo" : "1500",
        "OrderDate" : "09/02/2020",
        "OrderStatus" : "Confirm",
        "TotalQty" : 37,
        "TotalAmount" : 5974,
        "City" : "Hastings"
    },
    {
        "UserName" : "Danny Bourquin",
        "OrderNo" : "760",
        "OrderDate" : "20/01/2020",
        "OrderStatus" : "Confirm",
        "TotalQty" : 18,
        "TotalAmount" : 17930,
        "City" : "Waterbury"
    },
    {
        "UserName" : "Brian Stine",
        "OrderNo" : "3980",
        "OrderDate" : "27/01/2020",
        "OrderStatus" : "Confirm",
        "TotalQty" : 38,
        "TotalAmount" : 78455,
        "City" : "London"
    },
    {
        "UserName" : "Katelin Backer",
        "OrderNo" : "1461",
        "OrderDate" : "29/01/2020",
        "OrderStatus" : "Confirm",
        "TotalQty" : 3,
        "TotalAmount" : 66996,
        "City" : "Columbia"
    },
    {
        "UserName" : "Florance Finn",
        "OrderNo" : "1383",
        "OrderDate" : "06/05/2020",
        "OrderStatus" : "Confirm",
        "TotalQty" : 22,
        "TotalAmount" : 2625,
        "City" : "Youngstown"
    },
    {
        "UserName" : "Marcus Paschall",
        "OrderNo" : "3608",
        "OrderDate" : "30/01/2020",
        "OrderStatus" : "Confirm",
        "TotalQty" : 11,
        "TotalAmount" : 35491,
        "City" : "Woodville"
    },
    {
        "UserName" : "Lance Oldman",
        "OrderNo" : "2545",
        "OrderDate" : "31/03/2020",
        "OrderStatus" : "Confirm",
        "TotalQty" : 10,
        "TotalAmount" : 2762,
        "City" : "Birmingham"
    },
    {
        "UserName" : "Lloyd Carroll",
        "OrderNo" : "2551",
        "OrderDate" : "28/07/2020",
        "OrderStatus" : "Confirm",
        "TotalQty" : 48,
        "TotalAmount" : 15560,
        "City" : "Newark"
    },
    {
        "UserName" : "Alexis Tuck",
        "OrderNo" : "1938",
        "OrderDate" : "25/07/2020",
        "OrderStatus" : "Confirm",
        "TotalQty" : 41,
        "TotalAmount" : 15546,
        "City" : "Walkerville"
    },
    {
        "UserName" : "Cecilia Pace",
        "OrderNo" : "1052",
        "OrderDate" : "01/06/2020",
        "OrderStatus" : "Confirm",
        "TotalQty" : 50,
        "TotalAmount" : 16252,
        "City" : "Telford"
    },
    {
        "UserName" : "Miles Freeman",
        "OrderNo" : "1385",
        "OrderDate" : "09/05/2020",
        "OrderStatus" : "Confirm",
        "TotalQty" : 24,
        "TotalAmount" : 64715,
        "City" : "Woodville"
    },
    {
        "UserName" : "Edward Freeman",
        "OrderNo" : "2050",
        "OrderDate" : "24/06/2020",
        "OrderStatus" : "Confirm",
        "TotalQty" : 14,
        "TotalAmount" : 23024,
        "City" : "Orlando"
    },
    {
        "UserName" : "Edward Freeman",
        "OrderNo" : "2050",
        "OrderDate" : today,
        "OrderStatus" : "Confirm",
        "TotalQty" : 44,
        "TotalAmount" : 23024,
        "City" : "Orlando"
    },
    {
        "UserName" : "Shirin Kuwait",
        "OrderNo" : "2347",
        "OrderDate" : "20/08/2020",
        "OrderStatus" : "Confirm",
        "TotalQty" : 23,
        "TotalAmount" : 23024,
        "City" : "Delhi"
    }
]

module.exports = dataFile;