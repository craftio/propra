const express = require('express');
const config = require('./config.json');
const app = express();

app.set('PORT', config.webPort);

const port = process.env.PORT || app.get('PORT');

app.all('*', (req, res, next) => {
   console.log(req.url);
   next();
});

app.use('/api/v1', require('./routes/routes_api_v1'));
app.use('/api/v2', require('./routes/routes_api_v2'));

app.listen(port, () => {
    console.log('Server listening @ ' + port);
});

module.exports = app;