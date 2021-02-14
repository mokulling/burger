const mysql = require('mysql')
const express = require('express');
const exphbs  = require('express-handlebars');
const PORT = process.env.PORT || 3000
const connection = require('./config/connection')


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


const routes = require('./controllers/burgers_controller')

app.use(routes)

app.listen(PORT, function () {
    console.log(`listening on localhost:${PORT}`)
})