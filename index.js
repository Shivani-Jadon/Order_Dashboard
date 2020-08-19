const express = require('express');
const app = express();
const port = 8000;
const expressHandlebars = require('express-handlebars');

// configuring handlebar as our template engine
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

// request handler
app.get('/', (req, res) => {
    res.render('home');
});

// listening to the server at port
app.listen(port, function(err){
    if(err){
        console.log(`Error in starting server : ${err}`);
    }

    console.log(`Server started at port : ${port}`);
});