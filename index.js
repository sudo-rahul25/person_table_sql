const express = require('express');
const path = require('path');
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set('view engine', 'hbs');

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/pages', require('./routes/pages').route);
app.use('/api', require('./routes/api').route);

const port = process.env.PORT || 3000;
app.listen(port, function(){console.log(port)});