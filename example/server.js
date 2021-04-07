const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + '/storybook-static'));

const version = require('./package.json').version;

app.get('/version', function (request, response) {
    response.status(200).send(version);
});

app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, 'storybook-static', 'index.html'));
});

app.listen(port);

console.log('Server started on port ' + port);
