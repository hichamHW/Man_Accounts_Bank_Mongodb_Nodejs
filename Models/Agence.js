const mongoose = require('mongoose');

const AgenceShema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    libelle: String,
    horaires: Date,
    clients: [{

        type: mongoose.Schema.Types.ObjectId,
        ref: "Client"
    }]

});
module.exports = mongoose.model('Agence', AgenceShema);