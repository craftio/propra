const express = require('express');
const app = express;

let port = 8080;

app.get('/', function(reg, res) {
    res.send('Home');
});

app.all('*', function(req, res) {
    res.status(404);
    res.send('404 - Not found');
});

app.listen(port, function() {
    console.log('Server listening @ ' + port);
});