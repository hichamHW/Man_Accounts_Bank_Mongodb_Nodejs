const mongoose = require('mongoose');

const CompteShema = mongoose.Schema({
    _Id: mongoose.Schema.Types.ObjectId,
    numCompte: String,
    nom: String,
    solde: Number,
    tcompte: {

        type: mongoose.Schema.Types.ObjectId,
        ref: "TypeCompte"
    }

});
module.exports = mongoose.model('Compte', CompteShema);