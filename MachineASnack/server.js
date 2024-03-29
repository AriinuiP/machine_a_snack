const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const Produit = require('./Queries/produits.js');
const socketIO = require('socket.io');

const app = express();
const port = 3000;

const uri = 'mongodb+srv://user:QLsBEmaTXpwBKzhv@snacking.ssldmet.mongodb.net/Snacking';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connexion à la base de données établie avec succès');
  })
  .catch((err) => {
    console.log('Impossible de se connecter à la base de données :', err);
  });

const server = app.listen(port, () => {
  console.log('Le serveur écoute sur le port ' + port);
});

const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('Un nouveau client est connecté.');

  socket.on('getProduits', () => {
    Produit.find({})
      .then((produits) => {
        socket.emit('produits', produits);
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/produits", Produit);
