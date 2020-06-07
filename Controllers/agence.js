const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Agence = require('../Models/Agence');


/// list Agence///
router.get('/', (req, res) => {

    Agence.find().exec().then(data => {

        res.status(200).json(data);
    });

});


//// create Agence////
router.post('/', (req, res) => {

    const agence = new Agence({

        _id: new mongoose.Types.ObjectId(),
        libelle: req.body.libelle,
        horaires: Date.now(),
        clients: req.body.clients

    })

    agence.save().then((data) => {

        return res.status(200).json(data);
    }).catch((err) => {
        return res.status(400 || 500).json(err);
    });

    // return res.status(200 || 400).json(agence);

});

/// delete Agence by id///
router.delete('/:id', (req, res) => {

    const id = req.params.id;

    Agence.findOneAndDelete(id).exec().then(data => {
        return res.status(200).json(data);

    }).catch((err) => {
        return res.status(400 || 500).json(err);
    })

});

/// Get agence by id///
router.get('/:id', (req, res) => {

    const id = req.params.id;

    Agence.findById(id).exec().then(data => {
        return res.status(200).json(data);

    }).catch((err) => {
        return res.status(400 || 500).json(err);
    })

});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const agence = new Agence({

        _id: id,
        libelle: req.body.libelle,
        horaires: Date.now(),
        clients: req.body.clients
    })
    Agence.findByIdAndUpdate(id, agence).exec().then(data => {
        return res.status(200).json(data);

    }).catch((err) => {
        return res.status(400 || 500).json(err);
    })


});

/// delete All Agence //
router.delete('/', (req, res) => {

    const id = req.params.id;

    Agence.deleteMany().exec().then(data => {
        return res.status(200).json(data);

    }).catch((err) => {
        return res.status(400 || 500).json(err);
    })

});


module.exports = router;