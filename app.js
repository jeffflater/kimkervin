/**
 * Created by jeff.flater on 6/24/2014.
 */
var fs = require('fs'),
    express = require('express'),
    request = require('request');
app = express();
app.use(express.logger());

app.set('port', (process.env.PORT || 5002));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    response.sendfile('./public/index.html');
});

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
});