const mongoose = require('mongoose');

const AdresseShema = mongoose.Schema({
    _Id: mongoose.Schema.Types.ObjectId,
    ville: String,
    quartier: String,
    rue: String,
    porte: String,
    telephone: String,
    codePostal: String,
    email: String





});
module.exports = mongoose.model('Adreess', AdresseShema);