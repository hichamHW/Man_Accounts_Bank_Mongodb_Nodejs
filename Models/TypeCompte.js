const mongoose = require('mongoose');

const TypeShema = mongoose.Schema({
    _Id: mongoose.Schema.Types.ObjectId,
    libelle: String,
    nom: String,
    tauxInteret: Number
});

module.exports = mongoose.model('TypeCompte', TypeShema);