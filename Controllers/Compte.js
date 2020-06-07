const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Compte = require('../Models/Compte');


/// list Client///
router.get('/', (req, res) => {

    Compte.find().exec().then(data => {

        res.status(200).json(data);
    });

});


//// create Client/////
router.post('/', (req, res) => {

    const compte = new Compte({

        _id: new mongoose.Types.ObjectId(),
        numCompte: req.body.numCompte,
        nom: req.body.nom,
        solde: req.body.solde,
        tcompte: req.body.tcompte
    })

    compte.save().then((data) => {

        return res.status(200).json(data);
    }).catch((err) => {
        return res.status(400 || 500).json(err);
    });

    // return res.status(200 || 400).json(agence);

});

/// delete Agence by id///
router.delete('/:id', (req, res) => {

    const id = req.params.id;

    Compte.findOneAndDelete(id).exec().then(data => {
        return res.status(200).json(data);

    }).catch((err) => {
        return res.status(400 || 500).json(err);
    })

});

/// Get agence by id///
router.get('/:id', (req, res) => {

    const id = req.params.id;

    Compte.findById(id).exec().then(data => {
        return res.status(200).json(data);

    }).catch((err) => {
        return res.status(400 || 500).json(err);
    })

});

/// delete All Agence //
router.delete('/', (req, res) => {


    Compte.deleteMany().exec().then(data => {
        return res.status(200).json(data);

    }).catch((err) => {
        return res.status(400 || 500).json(err);
    })

});

router.put('/:id', (req, res) => {


    const id = req.params.id;

    const compte = new Compte({

        _id: id,
        numCompte: req.body.numCompte,
        nom: req.body.nom,
        solde: req.body.solde,
        tcompte: req.body.tcompte
    })

    Compte.findByIdAndUpdate(id, compte).exec().then(data => {
        return res.status(200).json(data);

    }).catch((err) => {
        return res.status(400 || 500).json(err);
    })

});

// update Solde///
router.patch('/Augsolde/:NumCompte/:Solde', (req, res) => {
    const NumCompte = req.params.NumCompte;
    const Solde = req.params.Solde;

    Compte.find({ "numCompte": NumCompte }).exec().then(data => {

        Compte.findByIdAndUpdate(data[0]._id, { "solde": data[0].solde + Solde }).exec().then(data1 => {
            return res.status(200).json(data1);

        }).catch((err) => {
            return res.status(400 || 500).json(err);
        })


    }).catch((err) => {
        return res.status(400 || 500).json(err);
    })

});
// update Solde///
router.patch('/Demsolde/:NumCompte/:Solde', (req, res) => {
    const NumCompte = req.params.NumCompte;
    const Solde = req.params.Solde;

    Compte.find({ "numCompte": NumCompte }).exec().then(data => {

        if (data[0].solde >= Solde) {

            Compte.findByIdAndUpdate(data[0]._id, { "solde": data[0].solde - Solde }).exec().then(data1 => {
                return res.status(200).json(data1);

            }).catch((err) => {
                return res.status(400 || 500).json(err);
            })
        } else {

            return res.status(400 || 500).json(err);
        }



    }).catch((err) => {
        return res.status(400 || 500).json(err);
    })

});

module.exports = router;