require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

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
    res.render('generic',{
        nombre: 'Sebastian Gonzalez',
        titulo: 'Curso Node'
    });
})

app.get('/elements', function (req, res) {
    res.render('elements',{
        nombre: 'Sebastian Gonzalez',
        titulo: 'Curso Node'
    });
  })


app.get('*', function (req, res) {
    res.render('404');
})
 
app.listen(port, ()=>{
    console.log(`App listening at http://localhost:${port}`);
})