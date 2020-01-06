var express = require('express');
var app = express();

// Respondemos con hola mundo para todo lo que pegue en el root
app.get('/', (req, res) => {
    res.send('hola World!');
});

app.listen(3000);

module.exports = app;