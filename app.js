const express = require('express');
const bodyParser = require('body-parser');
// TO MANAGE OUR DATABASE MONGO
const mongoose = require('mongoose');
const stuffRoutes = require('./routes/stuff');

// CONNECT TON MONGODB
mongoose.connect('mongodb+srv://mongodb_user:mongodb_password@cluster0.hrvxw.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((err) => console.log(err));

const app = express();

// TO ALLOW ANGULAR SERVER REQUEST OUR SERVER
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// PERMIT TO GET OBJECT FROM POST IN JSON 
app.use(bodyParser.json());

app.use('/api/stuff', stuffRoutes);

module.exports = app;