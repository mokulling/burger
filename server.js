const express = require('express');
const exphbs  = require('express-handlebars');
const PORT = process.env.PORT || 3000
const app = express();
const path = require('path')

app.use(express.static("public"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.engine('handlebars', exphbs({defaultLayout: "main"}));
app.set('view engine', 'handlebars');


const routes = require('./controllers/burgers_controller')

app.use(routes)

app.listen(PORT, function () {
    console.log(`listening on localhost:${PORT}`)
})