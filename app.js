const express = require('express')
const app = express()
 
// Servir Contenido estatico

app.use(express.static('public'));

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