const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Adresse = require('../Models/adresse');


/// list adresse///
router.get('/', (req, res) => {

    Adresse.find().exec().then(data => {

        res.status(200).json(data);
    });

});


//// create Agence////
router.post('/', (req, res) => {

    const adresse = new Adresse({

        _id: new mongoose.Types.ObjectId(),
        ville: req.body.ville,
        quartier: req.body.quartier,
        rue: req.body.rue,
        porte: req.body.porte,
        telephone: req.body.telephone,
        codePostal: req.body.codePostal,
        email: req.body.email



    })

    adresse.save().then((data) => {

        return res.status(200).json(data);
    }).catch((err) => {
        return res.status(400 || 500).json(err);
    });

    // return res.status(200 || 400).json(agence);

});

/// delete adresse by id///
router.delete('/:id', (req, res) => {

    const id = req.params.id;

    Adresse.findOneAndDelete(id).exec().then(data => {
        return res.status(200).json(data);

    }).catch((err) => {
        return res.status(400 || 500).json(err);
    })

});

/// Get adress by id///
router.get('/:id', (req, res) => {

    const id = req.params.id;

    Adresse.findById(id).exec().then(data => {
        return res.status(200).json(data);

    }).catch((err) => {
        return res.status(400 || 500).json(err);
    })

});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const adresse = new Adresse({

        _id: id,
        ville: req.body.ville,
        quartier: req.body.quartier,
        rue: req.body.rue,
        porte: req.body.porte,
        telephone: req.body.telephone,
        codePostal: req.body.codePostal,
        email: req.body.email


    })
    Adresse.findByIdAndUpdate(id, adresse).exec().then(data => {
        return res.status(200).json(data);

    }).catch((err) => {
        return res.status(400 || 500).json(err);
    })


});

/// delete All adresse //
router.delete('/', (req, res) => {


    Adresse.deleteMany().exec().then(data => {
        return res.status(200).json(data);

    }).catch((err) => {
        return res.status(400 || 500).json(err);
    })

});


/////update///
router.patch('/:id', (req, res) => {

    const id = req.params.id;

    Adresse.findByIdAndDelete(id).exec().then(data => {


        return res.status(200).json(data);

    }).catch(err => {


        return res.status(!200).json(err);

    })

});

module.exports = router;