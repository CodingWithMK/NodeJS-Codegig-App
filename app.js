const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

// Database
const db = require('./config/database')

// Test DB
db.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));

const app = express();

// Handlebars
app.engine('handlebars', exphbs.engine({defaultLayout: 'main', layoutsDir: "views/layout/"}));
app.set('view engine', 'handlebars');

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Index route
app.get('/', (req, res) => res.render('index', {layout: 'landing'}));

// Gig routes
app.use('/gigs', require('./routes/gigs'));

const PORT = process.env.PORT || 5000; 

app.listen(PORT, console.log(`Server running on port ${PORT}`))