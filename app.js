const http = require('http');

http.createServer((req, res) => {
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, {'Content-Type' : 'application/json'});

    const persona = {
        id : 1,
        nombre : 'Fernando'
    }

    res.write('id, nombre\n');
    res.write('1, Maria\n');
    res.write('2, Pedro\n');
    res.write('3, Juan\n');
    res.write('4, Jose\n');
    res.end();
})
.listen(8080);

console.log('Escuchando el puerto 8080')