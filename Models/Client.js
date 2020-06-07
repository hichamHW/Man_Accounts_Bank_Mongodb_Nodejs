const mongoose = require('mongoose');
const ClientShema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    civilite: String,
    nom: String,
    prenom: String,
    dateNais: Date,
    nature: String,
    adresses: [{

        type: mongoose.Schema.Types.ObjectId,
        ref: "Adresse",
    }],
    comptes: [{

        type: mongoose.Schema.Types.ObjectId,
        ref: "Compte"
    }]
});

module.exports = mongoose.model('Client', ClientShema);