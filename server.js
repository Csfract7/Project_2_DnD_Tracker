require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 3001; // Use the PORT from .env or default to 3001
const showController = require('./controllers/spells.js');
const methodOverride = require('method-override')

// Dependencies
const mongoose = require('mongoose')
const db = mongoose.connection

// Config
const mongoURI = process.env.mongoURI
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))

//  Models
const Spells = require('./models/spells.js')
const Seed = require('./models/seed.js')

// Connect to Mongo
mongoose.connect(mongoURI)

// Error / success
db.on('error', (err) => console.log(err.message + 'error with mongo connection'))
db.on('connected', () => console.log('mongo connected'))
db.on('disconnected', () => console.log('mongo disconnected'))

// Landing
app.get('/',  (req, res) => {
    res.render('landing.ejs')
    
})

app.use(express.static('public'));

app.use('/spells', showController);

app.listen(port, () => {
    console.log(`App is running on Port: ${port}`);
});
