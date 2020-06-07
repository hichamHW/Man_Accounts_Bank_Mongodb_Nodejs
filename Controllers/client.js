const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Client = require('../Models/Client');


/// list Client///
router.get('/', (req, res) => {

    Client.find().exec().then(data => {

        res.status(200).json(data);
    });

});


//// create Client/////
router.post('/', (req, res) => {

    const client = new Client({

        _id: new mongoose.Types.ObjectId(),
        civilite: req.body.civilite,
        nom: req.body.nom,
        prenom: req.body.prenom,
        dateNais: req.body.dateNais,
        nature: req.body.nature,
        adresses: req.body.adresses,
        comptes: req.body.comptes
    })

    client.save().then((data) => {

        return res.status(200).json(data);
    }).catch((err) => {
        return res.status(400 || 500).json(err);
    });

    // return res.status(200 || 400).json(agence);

});

/// delete Agence by id///
router.delete('/:id', (req, res) => {

    const id = req.params.id;

    Client.findOneAndDelete(id).exec().then(data => {
        return res.status(200).json(data);

    }).catch((err) => {
        return res.status(400 || 500).json(err);
    })

});

/// Get agence by id///
router.get('/:id', (req, res) => {

    const id = req.params.id;

    Client.findById(id).exec().then(data => {
        return res.status(200).json(data);

    }).catch((err) => {
        return res.status(400 || 500).json(err);
    })

});

/// delete All  client //
router.delete('/', (req, res) => {



    Client.deleteMany().exec().then(data => {
        return res.status(200).json(data);

    }).catch((err) => {
        return res.status(400 || 500).json(err);
    })

});
router.put('/:id', (req, res) => {
    const id = req.params.id;

    const client = new Client({

        _id: id,
        civilite: req.body.civilite,
        nom: req.body.nom,
        prenom: req.body.prenom,
        dateNais: req.body.dateNais,
        nature: req.body.nature,
        adresses: req.body.adresses,
        comptes: req.body.comptes
    })


    Client.findByIdAndUpdate(id, client).exec().then(data => {
        return res.status(200).json(data);

    }).catch((err) => {
        return res.status(400 || 500).json(err);
    })
});


module.exports = router;