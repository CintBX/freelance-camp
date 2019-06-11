// Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files from the dist directory
app.use(express.static(__dirname + '/dist/freelance-camp-fe'));

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname + '/freelance-camp-fe/src/index.html'));
})

// Start the app by listening on the default heroku port
app.listen(process.env.PORT || 8080);