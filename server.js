var express = require('express');
var app = express();

// API routes
require('./fruits')(app);

// Static Files
app.use(express.static('./client'));
app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});