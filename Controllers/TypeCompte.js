const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const TCompte = require('../Models/TypeCompte');


/// list Client///
router.get('/', (req, res) => {

    TCompte.find().exec().then(data => {

        res.status(200).json(data);
    });

});


//// create Client/////
router.post('/', (req, res) => {

    const Tcompte = new TCompte({

        _id: new mongoose.Types.ObjectId(),
        libelle: req.body.libelle,
        nom: req.body.nom,
        tauxInteret: req.body.tauxInteret
    })

    Tcompte.save().then((data) => {

        return res.status(200).json(data);
    }).catch((err) => {
        return res.status(400 || 500).json(err);
    });

    // return res.status(200 || 400).json(agence);

});

/// delete Agence by id///
router.delete('/:id', (req, res) => {

    const id = req.params.id;

    TCompte.findOneAndDelete(id).exec().then(data => {
        return res.status(200).json(data);

    }).catch((err) => {
        return res.status(400 || 500).json(err);
    })

});

/// Get agence by id///
router.get('/:id', (req, res) => {

    const id = req.params.id;

    TCompte.findById(id).exec().then(data => {
        return res.status(200).json(data);

    }).catch((err) => {
        return res.status(400 || 500).json(err);
    })

});

/// delete All Agence //
router.delete('/', (req, res) => {


    TCompte.deleteMany().exec().then(data => {
        return res.status(200).json(data);

    }).catch((err) => {
        return res.status(400 || 500).json(err);
    })

});

router.put('/:id', (req, res) => {


    const id = req.params.id;

    const Tcompte = new TCompte({

        _id: id,
        libelle: req.body.libelle,
        nom: req.body.nom,
        tauxInteret: req.body.tauxInteret
    })

    TCompte.findByIdAndUpdate(id, Tcompte).exec().then(data => {
        return res.status(200).json(data);

    }).catch((err) => {
        return res.status(400 || 500).json(err);
    })

});


module.exports = router;