const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const Produit = require('./Queries/schemaProduit.js');
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
  console.log('Connexion socket détecté ');
  console.log("Nombre de socket connectée :",io.engine.clientsCount);

  socket.on('getProduits', () => {
    Produit.find({ quantite : { $gt: 0 } })
      .then((produits) => {
        socket.emit('produits', produits);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  socket.on('getProduit', (id) => {
    Produit.findById(id)
      .then((produit) => {
        socket.emit('produit', produit);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  socket.on('buyProduit', (id) => {
    Produit.findByIdAndUpdate(id, { $inc: { quantite: - 1 } }, { new: true })
      .then((produit) => {
        console.log("produit : "+produit);
        if (!produit) {
          return res.status(404).send({
            message: 'Produit not found with id ' + id
          });
        }
        socket.emit('produit', produit);
      })
      .catch((err) => {
        console.log('Error updating produit :', err);
        return next(err);
      });
  });

  socket.on('disconnect', () => {
    console.log('Déconnexion:', socket.id);
    socket.disconnect(socket.id);
  });

});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

