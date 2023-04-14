// création d'un mongoose schema pour produit avec 
// les champs nom, prix, quantité et description non obligatoire
const mongoose=require('mongoose');
const Produit =new mongoose.Schema({
    nom:{
        type:String,
        required:true,
        unique:true,
    },
    prix:{
        type:Number,
        required:true
    },
    quantite:{
        type:Number,
        required:true,
        default:1
    },
    description:{
        type:String,
        required:false // optional
    }


});
// exportation du schema
module.exports=mongoose.model('Produit',Produit);