const agence = require('../Controllers/agence');
const client = require('../Controllers/client');
const Compte = require('../Controllers/Compte');
const Adresse = require('../Controllers/adresse');
const TCompte = require('../Controllers/TypeCompte');
const Home = require('../Controllers/Home');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


mongoose.connect('mongodb://localhost:27017/meanjs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




app.use('/agence', agence);
app.use('/compte', Compte);
app.use('/client', client);
app.use('/adresse', Adresse);
app.use('/typecompte', TCompte);
app.use('/', Home);

module.exports = app;