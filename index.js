// importation de express mongoose et body-parser
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// initialisation express et allocation port 4000
// appel de Produit.model.js depuis le dossier model sous app
const Produit = require('./app/model/Produit.model');
const app = express();
const port = 4000;
// connexion à la base de données mongoose
mongoose.connect('mongodb+srv://protechgabes:iQYVAUCyL9sZ7Aez@cluster0.hfjjthx.mongodb.net/gestion', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connected to database')
}).catch((err) => {
    console.log(err)
});
/*
const nvProduit = new Produit({nom: 'produit 2', prix: 120, quantite: 13, description: 'produit 2 description'})
nvProduit.save().then((data) => {
    console.log("saved " + data)
}).catch((err) => {
    console.log(err)
});
*/
/*
// affichage de tout les produits
Produit.find().then((produits) => {
    console.log("liste des produits "+produits);
}).catch((err) => {
    console.log(err);
});
// affichage par nom
Produit.findOne({nom: 'produit 2',description:'rien'}).then((produits) => {
    console.log("liste des produits par nom "+produits);
}).catch((err) => {
    console.log(err);
});
*/
// update de produit d'id 643920d9cfdbc2a13418e7c3
Produit.findByIdAndUpdate('643920d9cfdbc2a13418e7c3', { prix: 80, quantite: 23}).then((produit) => {
console.log(produit)
}).catch((err) => {
console.log(err)
});
Produit.findByIdAndDelete('643920d9cfdbc2a13418e7c3').then(() => {
console.log('deleted')
}).catch((err) => {
console.log(err)
});


app.listen(4000, () => {
    console.log('listening on port 4000');
});
