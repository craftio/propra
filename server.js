const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.get('/hello', (reg, res) => {
    res.send('Home');
});

app.all('*', (req, res) => {
    res.status(404);
    res.send('404 - Not found');
});

app.listen(port, () => {
    console.log('Server listening @ ' + port);
});