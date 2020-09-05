const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

// App settings
app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 8888));
app.use(express.static(__dirname + "/public"));

// Routes
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(app.get('port'), () => {
    console.log("SUNY Korea ISA server listening on port ", app.get('port'));
});