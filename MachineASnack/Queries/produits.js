const mongoose = require('mongoose');
const express = require('express');

const produitSchema = new mongoose.Schema({
  _id:  Number,
  name: String,
  prix: Number,
  uri: String,
  quantite: Number,
});

const routeur = express.Router();

const Produit = mongoose.model('produits', produitSchema);

// GET ALL
routeur.get('/', (req, res, next) => {
    Produit.find({})
      .then((produits) => {
        res.send(produits);
      })
      .catch((err) => {
        console.log('Impossible de récupérer les produits :', err);
        return next(err);
      });
  });

  // GET ITEM WITH ID
routeur.get('/:_id', (req, res, next) => {
  const id = req.params._id;
  Produit.findById(id)
    .then((produit) => {
      res.send(produit);
    })
    .catch((err) => {
      console.log('Impossible de récupérer le produit :', err);
      return next(err);
    });
});

//UPDATE QUANTITE
routeur.put('/:_id', (req, res, next) => {
    const id = req.params._id;
    const quantite = req.body.quantite;
    console.log("quantite : " + quantite);
    console.log(id);
    Produit.findByIdAndUpdate(id, { $set: { quantite: quantite - 1 } }, { new: true })
      .then((produit) => {
        console.log("produit : "+produit);
        if (!produit) {
          return res.status(404).send({
            message: 'Produit not found with id ' + id
          });
        }
        res.send(produit);
      })
      .catch((err) => {
        console.log('Error updating produit :', err);
        return next(err);
      });
  });


module.exports = routeur;
