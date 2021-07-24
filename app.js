const express = require('express')
const hbs = require('hbs');

const app = express()

// Handlebar
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {}); 

// Servir Contenido estatico

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('home',{
        nombre: 'Sebastian Gonzalez',
        titulo: 'Curso Node'
    });
})

app.get('/generic', function (req, res) {
    res.sendFile(__dirname + '/public/generic.html');
})

app.get('/elements', function (req, res) {
    res.sendFile(__dirname + '/public/elements.html');
  })


app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html');
})
 
app.listen(8080)