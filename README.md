# Order_Dashboard

Dashboard for order and user information using a Handlebar templates.
Tech Stack - HTML, CSS, JavaScript, NodeJs, Handlebars.js, Charts.js, Bootstrap

## Basic Features.

1. Look at the orders by count.
2. Visualize the orders in graphical format.
3. Look at the orders by top/bottom 5 amount.
4. Look at the orders by top/bottom 5 users.
5. Get detailed report of Order data.

### Dashboard View

<img src = "/git-static/dashboard.png">

### Visualization Graph

<img src = "/git-static/trend_chart.png">

## How To Install.

1. Clone this project
2. Start by installing npm if you don't have it already.
3. Navigate to Project Directory by :

```
cd Order_Dashboard
```

4. run following commands :

```
npm install
npm start or node index.js
```

## Directory Structure and flow of The Code

This code follows MVC pattern and hence everything is differentiated and well managed:

`/routes` - containes all the routes. <br>
`/assets` - static js css and image files. <br>
`/views` - contains view files written in handlebars to be served. <br>
`/data` - contains dummy data. <br>
