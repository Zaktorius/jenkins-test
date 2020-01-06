var express = require('express');
var app = express();

// Respondemos con hola mundo para todo lo que pegue en el root
app.get('/', (req, res) => {
    res.send('heyay World!');
});

app.listen(3000);

module.exports = app;