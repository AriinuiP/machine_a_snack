const mongoose = require('mongoose');
const express = require('express');

const produitSchema = new mongoose.Schema({
  _id:  Number,
  name: String,
  prix: Number,
  uri: String,
  quantite: Number,
});

const Produit = mongoose.model('produits', produitSchema);

module.exports = Produit;