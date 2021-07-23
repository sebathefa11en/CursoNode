const express = require('express')
const app = express()
 
// Servir Contenido estatico

app.use(express.static('public'));

app.get('/hola-mundo', function (req, res) {
    res.send('Hola mundo en su respectiva ruta')
  })

  app.get('*', function (req, res) {
    res.send('404 | Page not Found')
  })
 
app.listen(8080)